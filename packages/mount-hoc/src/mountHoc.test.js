import mountHoc from './mountHoc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withProps, withHandlers, withContext, getContext } from 'recompose';

const mockEnhancer = compose(
    connect(({ someState }) => ({ somePropFromState: `${someState}2` })),
    withProps(({ someProp }) => ({ someProp3: `${someProp}3` })),
    getContext({ someContextAvailableToMountedHOC: PropTypes.string }),
    withHandlers({
        testHandler: ({ dispatch }) => () => dispatch({ type: 'test' })
    }),
    withProps(({ someProp }) => ({ someProp2: `${someProp}2` })),
    withContext({ someContextFromHOC: PropTypes.string }, () => ({ someContextFromHOC: 'someContextValue' }))
);

const mockState = { someState: 'someStateValue' };
const mockProps = { someProp: 'somePropValue' };
const mockContext = { someContextAvailableToMountedHOC: 'someContext' };

describe('[app/modules/testing/mountHoc]', () => {
    describe('When I call the function with a connected container', () => {
        let component, setProps, store;
        beforeEach(() => {
            ({ component, setProps, store } = mountHoc(mockEnhancer, {
                props: mockProps,
                state: mockState,
                context: mockContext,
                getContextTypes: { someContextFromHOC: PropTypes.string }
            }));
        });
        describe('the created component', () =>
            it('has expected props', () => expect(component.props()).toMatchSnapshot()));
        describe('the created store', () => it('has expected state', () => expect(store.getState()).toMatchSnapshot()));
        describe('calling a handler function of the mounted HOC', () => {
            beforeEach(() => component.prop('testHandler')());
            describe('the dispatch handler of the mock store', () =>
                it('is called', () => expect(store.dispatch).toBeCalledWith({ type: 'test' })));
        });
        describe('and call the "setProps" method', () => {
            beforeEach(() => setProps({ changedFoo: 'changedBar' }));
            describe('the component', () =>
                it('reflects the changed props', () => expect(component.props()).toMatchSnapshot()));
        });
    });
});

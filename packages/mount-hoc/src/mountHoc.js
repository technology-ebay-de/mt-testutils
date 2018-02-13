import React from 'react';
import PropTypes from 'prop-types';
import createMockStore from '@mt-testutils/mock-store';
import { mount } from 'enzyme';
import { compose, getContext } from 'recompose';
import { connect } from 'react-redux';

export default (
    enhancer,
    { props = {}, state = {}, context = {}, getContextTypes = {}, WrappedComponent = () => <div>wrapped</div> } = {}
) => {
    const childContextTypes = createChildContextTypesFromContext(context);
    const _getContext = compose(getContext(getContextTypes));
    const store = createMockStore(state);
    const EnhancedComponent = connect()(enhancer(_getContext(innerProps => <WrappedComponent {...innerProps} />)));
    const wrapper = mount(<EnhancedComponent store={store} {...props} />, { context, childContextTypes });
    const component = wrapper.find(WrappedComponent);
    const unmount = wrapper.unmount.bind(wrapper);
    const setProps = wrapper.setProps.bind(wrapper);
    return { store, component, unmount, setProps, wrapper, WrappedComponent };
};

function createChildContextTypesFromContext(context) {
    return Object.keys(context).reduce((propTypes, key) => ({ ...propTypes, [key]: PropTypes.any }), {});
}

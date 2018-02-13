import createMockStore from './mockStore';

describe('[app/modules/testing/createMockStore]', () => {
    describe('When I create a mock store with a given state', () => {
        let mockStore;
        beforeAll(() => {
            mockStore = createMockStore({
                foo: 'bar'
            });
        });
        describe('the getState function', () =>
            it('returns the state', () => void mockStore.getState().should.deep.equal({ foo: 'bar' })));

        describe('and call the setState function', () => {
            beforeAll(() => mockStore.setState({ foo: 'baz' }));
            describe('the getState function', () =>
                it('returns the new state', () => void mockStore.getState().should.deep.equal({ foo: 'baz' })));
        });

        describe('and call the dispatch function', () => {
            beforeAll(() => mockStore.dispatch('ctie'));
            describe('the dispatch spy', () =>
                it('reflects the call', () => expect(mockStore.dispatch).toBeCalledWith('ctie')));

            describe('and call the reset function', () => {
                beforeAll(() => mockStore.reset());
                describe('the dispatch spy', () =>
                    it('reflects the reset', () => expect(mockStore.dispatch).not.toBeCalled()));
                describe('the getState function', () =>
                    it('returns the original state', () =>
                        void mockStore.getState().should.deep.equal({ foo: 'bar' })));
            });
        });
    });
});

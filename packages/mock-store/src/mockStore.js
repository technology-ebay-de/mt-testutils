/* global jest */
export default (state = {}) => {
    const dispatch = jest.fn();
    let currentState = state;

    return {
        dispatch,
        getState() {
            return currentState;
        },
        subscribe() {},
        reset() {
            dispatch.mockClear();
            currentState = state;
        },
        setState(newState) {
            currentState = newState;
        },
        close() {}
    };
};

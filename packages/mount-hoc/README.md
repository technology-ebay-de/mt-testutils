# mount-hoc

Helper function that:

* creates a mockStore with given state
* connects the component to the Redux store
* mounts a component with [Enzyme](http://airbnb.io/enzyme/)
* allows to pass `contextTypes`, which will automatically added as props to the mounted component

## Installation

    npm install --save-dev @mt-testutils/mount-hoc
    
## Usage

    import mountHoc from '@mt-testutils/mount-hoc';
    import myHoc from './myHoc';
    
    // Props passed to the higher order component, defaults to {} if omitted
    const props = {
        someProp: 'some prop'
    };
    
    // Redux state, defaults to {} if omitted
    const state = {
        foo: 'bar'
    };
    
    // Component that is wrapped by the HOC, defaults to <div>wrapped</div>
    const WrappedComponent = <h1>Hello!!1!</h1>;
    
    mountHoc(myHoc, { props, state, WrappedComponent });
    
## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

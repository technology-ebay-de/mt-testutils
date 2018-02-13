# mock-store

Simple utility function to create a mock Redux store, to be used for unit tests.

## Installation

    npm install --save-dev @mt-testutils/mock-store
    
## Usage

    import createMockStore from '@mt-testutils/mock-store';
    
    // Initial Redux state for the mock store, defaults to {} if omitted  
    const state = {
        foo: 'bar'
    };
    
    const mockStore = createMockStore(state);
    
## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

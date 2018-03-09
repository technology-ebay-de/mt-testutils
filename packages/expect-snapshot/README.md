# expect-snapshot

This is a convencience function for rendering a React component and asserting that it matches a Jest snapshot.

## Installation

    npm install --save-dev @mt-testutils/expect-snapshot

## Usage

    import MyReactComponent from './MyReactComponent';
    import expectSnapshot from '@mt-testutils/expect-snapshot';
   
    describe('My react component', () => 
        it('renders correctly', () => expectSnapshot(<MyComponent />)
    );
   
## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH

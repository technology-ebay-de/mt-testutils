# expect-shallow-snapshot

This is a convencience function for shallow-rendering a React component and asserting that it matches a Jest snapshot.

Shallow rendering means that nested components are not actually rendered, but show up in the snapshots as 
React components.

## Installation

    npm install --save-dev @mt-testutils/expect-shallow-snapshot

## Usage

    import MyReactComponent from './MyReactComponent';
    import expectShallowSnapshot from '@mt-testutils/expect-shallow-snapshot';
   
    describe('My react component', () => 
        it('renders correctly', () => expectShallowSnapshot(<MyComponent />)
    );
   
## Change Log

* See [CHANGELOG.md](CHANGELOG.md)

## Contribution Guidelines

* See [CONTRIBUTING.md](../../CONTRIBUTING.md)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH

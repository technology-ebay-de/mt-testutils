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

## Code Ownership

This code was brought to you by **Team GT** of mobile.de's product and technology  department.

* Jakob Gehring, product owner
* [Christoph Springer](https://github.corp.ebay.com/chrispringer), team lead
* [Patrick Hund](https://github.corp.ebay.com/pahund), software engineer (frontend)
* [Nina Maaß](https://github.corp.ebay.com/jmaass), software engineer (frontend)
* [Eike Schulte-Kersmecke](https://github.corp.ebay.com/eschultekersmeck), software engineer (backend)
* [Anja Kunkel](https://github.corp.ebay.com/ankunkel), software engineer (backend)
* [Mike Krüger](https://github.corp.ebay.com/mikkrueger), quality assurance engineer

### Contact the Team

* Slack: [#mob-team-gt](https://ebayclassifiedsgroup.slack.com/messages/mob-team-gt/)

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH

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

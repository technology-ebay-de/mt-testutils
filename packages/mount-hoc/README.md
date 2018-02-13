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

# test-saga

Allows easy testing of redux-sagas without having to mock anything.

## Installation

    npm install --save-dev @mt-testutils/test-saga
    
## Usage

Let's assume we have a generator function like this:

    function* mySaga() {
        try {
            const value1 = put(someAction);
            yield value1;
        } catch (e) {
            yield 'ERROR';
        }
    }

With this helper function, we can easily test the generator, by writing one `it` test per yield expression:

    import mySaga from './mySaga';
    import testSaga from '@mt-testutils/test-saga';

    testSaga(mySaga(), () => {
        it('should yield a put', nextYield => {
            nextYield.should.equal(put(someAction));
            return 'hello world'
        });
        it ('should yield the return value from last yield', nextYield => {
            nextYield.should.equal('hello world');
            return new Error('ERROR');
        });
        it ('should yield the error thrown by last yield', nextYield => {
            nextYield.should.equal('ERROR');
        });
    });

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

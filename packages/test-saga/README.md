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

## License

[MIT licensed](LICENSE)

Copyright © 2018 mobile.de GmbH

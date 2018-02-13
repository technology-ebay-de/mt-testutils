import testGenerator from './testSaga';

function* mySaga(input) {
    try {
        const value1 = yield input;
        yield value1;
    } catch (e) {
        yield 'ERROR';
    }
}

describe('Given the `mySaga` generator above', () => {
    testGenerator(mySaga, ['hello world'], () => {
        describe('going the happy path', () => {
            describe('the `it` function', () => {
                it('should provide the yield expression as argument', nextYield => {
                    nextYield.should.equal('hello world');
                    return 'i am the result of the yield expression';
                });
                it('should use the return value as yield input', nextYield => {
                    nextYield.should.equal('i am the result of the yield expression');
                });
            });
        });
        describe('going the unhappy path (this tests generator forking)', () => {
            describe('the `it` function', () => {
                it('should provide the yield expression as argument', nextYield => {
                    nextYield.should.equal('hello world');
                    return new Error('whoopsies');
                });
                it('should throw the return value if it is an instance of an error', nextYield => {
                    nextYield.should.equal('ERROR');
                });
            });
        });
    });
});

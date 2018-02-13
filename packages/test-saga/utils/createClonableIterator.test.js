import createClonableIterator from './createClonableIterator';

function* myGenerator(one) {
    yield one;
    yield 2;
    yield 3;
}

describe('[app/modules/testing/utils/createClonableIterator]', () => {
    describe('when creating a clonable iterator', () => {
        let iterator;
        beforeEach(() => {
            iterator = createClonableIterator(myGenerator, [1]);
        });
        describe('the returned iterator', () => {
            it('has a `next` method', () => {
                iterator.next.should.be.a('function');
            });
            it('has a `clone` method', () => {
                iterator.clone.should.be.a('function');
            });
            it('can be iterated on', () => {
                iterator.next().should.deep.equal({ value: 1, done: false });
                iterator.next().should.deep.equal({ value: 2, done: false });
                iterator.next().should.deep.equal({ value: 3, done: false });
                iterator.next().should.deep.equal({ value: undefined, done: true });
            });
        });
        describe('the clone of the resulting iterator', () => {
            let clonedIterator;
            beforeEach(() => {
                clonedIterator = iterator.clone();
            });
            it('has a `next` method', () => {
                clonedIterator.next.should.be.a('function');
            });
            it('has a `clone` method', () => {
                clonedIterator.clone.should.be.a('function');
            });
            it('can be iterated on', () => {
                clonedIterator.next().should.deep.equal({ value: 1, done: false });
                clonedIterator.next().should.deep.equal({ value: 2, done: false });
                clonedIterator.next().should.deep.equal({ value: 3, done: false });
                clonedIterator.next().should.deep.equal({ value: undefined, done: true });
            });
            it('should behave independend from original iterator', () => {
                iterator.next().should.deep.equal({ value: 1, done: false });
                iterator.next().should.deep.equal({ value: 2, done: false });
            });
        });
        describe('and cloning an already started iterator', () => {
            let clonedIterator;
            beforeEach(() => {
                iterator.next();
                clonedIterator = iterator.clone();
            });
            describe('the two iterators', () => {
                it('iterate independantly from each other', () => {
                    iterator.next().value.should.equal(2);
                    clonedIterator.next().value.should.equal(2);
                });
            });
        });
    });
});

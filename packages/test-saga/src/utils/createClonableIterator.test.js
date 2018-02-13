import createClonableIterator from './createClonableIterator';

function* myGenerator(one) {
    yield one;
    yield 2;
    yield 3;
}

describe('When creating a clonable iterator', () => {
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
            const nextSteps = [iterator.next(), iterator.next(), iterator.next(), iterator.next()];
            expect(nextSteps).toMatchSnapshot();
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
            const nextSteps = [
                clonedIterator.next(),
                clonedIterator.next(),
                clonedIterator.next(),
                clonedIterator.next()
            ];
            expect(nextSteps).toMatchSnapshot();
        });
        it('should behave independently from original iterator', () => {
            const nextSteps = [iterator.next(), iterator.next(), iterator.next(), iterator.next()];
            expect(nextSteps).toMatchSnapshot();
        });
    });
    describe('and cloning an already started iterator', () => {
        let clonedIterator;
        beforeEach(() => {
            iterator.next();
            clonedIterator = iterator.clone();
        });
        describe('the two iterators', () => {
            it('iterate independently from each other', () => {
                iterator.next().value.should.equal(2);
                clonedIterator.next().value.should.equal(2);
            });
        });
    });
});

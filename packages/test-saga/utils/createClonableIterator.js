/**
 * createClonableIterator
 *
 * Allows to create a generator function that has an added `clone` property, that will return a
 * cloned iterator with the same state as the original iterator.
 *
 * Changing the state of the cloned iterator will not affect the original iterator's state.
 *
 * Example:
 *
 *   function* myGen(someArg) {
 *       yield 1;
 *       yield 2;
 *       yield 3;
 *   }
 *
 *   // cloning a generator
 *   const iterator = createClonableIterator(myGen, 'someArgValue');
 *   const clonedIterator = iterator.clone();
 */

const createClonableIterator = (getRootIterator, history = []) => {
    const iterator = getRootIterator();
    const next = iterator.next.bind(iterator);

    history.forEach((key, value) => {
        next(value);
    });

    iterator.next = input => {
        history.push(input);
        return next(input);
    };

    iterator.clone = () => createClonableIterator(getRootIterator, history.slice(0));

    return iterator;
};

export default (generator, generatorArgsArray = []) => {
    const getRootIterator = () => generator.apply(null, generatorArgsArray);
    return createClonableIterator(getRootIterator);
};

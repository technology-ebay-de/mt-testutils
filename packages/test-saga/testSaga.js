import createClonableIterator from './utils/createClonableIterator';

const origIt = global.it;
const origDescribe = global.describe;
const contexts = [];
const getCurrentContext = () => contexts[contexts.length - 1];

const it = (title, testFn) => {
    const context = getCurrentContext();
    origIt(title, (...args) => {
        const { iterator, lastYieldResult } = context;
        const nextYieldExpression =
            lastYieldResult instanceof Error
                ? iterator.throw(lastYieldResult, args)
                : iterator.next(lastYieldResult, args);
        context.lastYieldResult = testFn(nextYieldExpression.value);
    });
};

const describe = (title, callback) => {
    const context = getCurrentContext();
    contexts.push({
        lastYieldResult: context.lastYieldResult,
        iterator: context.iterator.clone()
    });
    origDescribe(title, () => {
        callback();
        contexts.pop();
    });
};

export default function(generator, generatorArgs = [], callback) {
    const iterator = createClonableIterator.apply(null, [generator, generatorArgs]);

    contexts.push({
        lastYieldResult: undefined,
        iterator
    });

    global.it = it;
    global.describe = describe;
    callback();

    global.it = origIt;
    global.describe = origDescribe;
    contexts.pop();
}

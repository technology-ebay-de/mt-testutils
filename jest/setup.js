import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

if (!global._babelPolyfill) {
    require('babel-polyfill');
}

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

configure({ adapter: new Adapter() });

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
    get() {
        Object.assign(this, this.assignedNot);
        return originalNot.apply(this);
    },
    set(newNot) {
        this.assignedNot = newNot;
        return newNot;
    }
});

// Combine both jest and chai matchers on expect
const jestExpect = global.expect;

global.expect = actual => {
    const originalMatchers = jestExpect(actual);
    const chaiMatchers = chai.expect(actual);
    return Object.assign(chaiMatchers, originalMatchers);
};

// re-add jests expect.anything
if (jestExpect) {
    global.expect.anything = jestExpect.anything;
}

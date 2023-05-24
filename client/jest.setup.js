import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const matchers = require('jest-extended');
expect.extend(matchers);

afterEach(() => {
    jest.useRealTimers();
});

Enzyme.configure({ adapter: new Adapter() });

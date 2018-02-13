/* global expect */

import renderer from 'react-test-renderer';

export default component => expect(renderer.create(component).toJSON()).toMatchSnapshot();

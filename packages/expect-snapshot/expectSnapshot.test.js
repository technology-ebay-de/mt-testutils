import React from 'react';
import expectSnapshot from './expectSnapshot';

const mockComponent = <div>test</div>;

describe('[app/modules/testing/expectRenderedToMatchSnapshot]', () => {
    it('renders correctly', () => expectSnapshot(mockComponent));
});

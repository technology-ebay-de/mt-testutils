import React from 'react';
import expectSnapshot from './expectSnapshot';

const mockComponent = <div>test</div>;

describe('My mock component', () => {
    it('renders correctly', () => expectSnapshot(mockComponent));
});

import React from 'react';
import expectShallowSnapshot from './expectShallowSnapshot';

const mockComponent = <div>test</div>;

describe('My mock component', () => it('renders correctly', () => expectShallowSnapshot(mockComponent)));

import { shallow } from 'enzyme';
import React from 'react';
import Articles from './Articles';

it("renders without crashing", () => {
    shallow(<Articles/>);
});
import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/index';

it("renders without crashing", () => {
    shallow(<App/>);
});
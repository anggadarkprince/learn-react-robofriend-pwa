import {shallow} from 'enzyme';
import React from 'react';

import Card from "./Card";

describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Card debug />);
        expect(component).toMatchSnapshot();
    });
});

/*
it('expect to render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});
*/
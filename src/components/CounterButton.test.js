import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
    const wrapper = shallow(<CounterButton/>)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('button').simulate('click');
    expect((wrapper.state())).toEqual({count: 1})
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect((wrapper.state())).toEqual({count: 3})
});
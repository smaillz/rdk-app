import * as React from 'react';
import { NavBar } from '../src/Containers/Header/NavBar';
import { shallow } from 'enzyme';

describe('<NavBar>', () => {
    it(' mount', () => {
        const wrapper = shallow(<NavBar/>);

        expect(wrapper.find('.nav').length).toBe(1);
    });
});

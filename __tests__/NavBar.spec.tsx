import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import NavBar from '../src/Containers/NavBar';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe(' <NavBar>', () => {
    it('renders without crashing', () => {
        const div: Element = document.createElement('div');

        render(<NavBar />, div);
        unmountComponentAtNode(div);
    });

    it('not call render', () => {
        const component = shallow(<NavBar/>).instance();
        const spy = jest.spyOn(component, 'render');
        expect(spy).not.toHaveBeenCalled();
    });

    it('call render', () => {
        const component = shallow(<NavBar/>).instance();
        const spy = jest.spyOn(component, 'render');

        component.forceUpdate();

        expect(spy).toHaveBeenCalled();
    });
});

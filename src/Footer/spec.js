import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '.';
import { shallow, mount, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
    it('should render footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.footer')).toHaveLength(1);
    });

    it('Should render correct string depending of if it\'s on 2018 already or not', () => {
        const wrapper = shallow(<Footer />);
        wrapper.setState({ isDecember2017Already: false });
        expect(wrapper.find('.footer').text()).toContain('Currency before 2018');
        wrapper.setState({ isDecember2017Already: true });
        expect(wrapper.find('.footer').text()).toContain('Currency after 2018');
    });

});
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

    it('Should render before string when isJune2018 is set to false', () => {
        const wrapper = shallow(<Footer />);
        wrapper.setState({ isJune2018Already: false });
        expect(wrapper.find('.footer').text()).toContain('Data before June 2018');
    });

    it('Should render after string when isJune2018 is set to true', () => {
        const wrapper = shallow(<Footer />);
        wrapper.setState({ isJune2018Already: true });
        expect(wrapper.find('.footer').text()).toContain('Data after June 2018');
    });

});

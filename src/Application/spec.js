import React from 'react';
import ReactDOM from 'react-dom';
import Application from './index';
import Header from '../Header';
import Footer from '../Footer';

import { shallow, mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Application />', () => {
  it('should render application without crashing', () => {
      const wrapper = shallow(<Application />);
      expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render application without crashing', () => {
      const wrapper = shallow(<Application />);
      expect(wrapper.find(Footer)).toHaveLength(1);
  });

});

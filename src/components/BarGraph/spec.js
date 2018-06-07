import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore'
import ConnectedBarGraph, { BarGraph } from '.';
import { Line } from 'react-chartjs-2';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<BarGraph />', () => {
    it('should render BarGraph', () => {
        const city = 'London';
        const weatherData = [{
            dt_txt: "2018-05-31 15:00:00",
            main: {temp: 20}
            }]

        const wrapper = shallow(<BarGraph weatherData={weatherData} city={city}/>);
        console.log(wrapper.debug());
        expect(wrapper.find(Line)).toHaveLength(1);
    })

    it('should contain options prop displaying variations in the given city', () => {
      const city = 'London';
      const weatherData = [{
          dt_txt: "2018-05-31 15:00:00",
          main: {temp: 20}
          }]

      const wrapper = shallow(<BarGraph weatherData={weatherData} city={city}/>);
      expect(wrapper.find(Line).prop('options').title.text).toContain('Weather variations during 5 days in London');
    });

    it('should check if data prop is present', () => {
      const city = 'London';
      const weatherData = [{
          dt_txt: "2018-05-31 15:00:00",
          main: {temp: 20}
          }]

      const wrapper = shallow(<BarGraph weatherData={weatherData} city={city} />)
      expect(wrapper.find(Line).props()).toHaveProperty('data');
    });
});

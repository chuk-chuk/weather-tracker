import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore'
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import ConnectedChart, { Chart } from '.';
import BarGraph from '../BarGraph';

configure({ adapter: new Adapter() });

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

xdescribe('<Chart />', () => {


    it('should render without crashing', () => {
        const fetchItems = jest.fn();
        const wrapper = shallow(<Chart fetchItems={fetchItems}/>);
        expect(wrapper.find(BarGraph)).toHaveLength(1);
    });

    it('should get the right property state from the store and set it as a city prop', async () => {
      const mockStore = {
        apiData: {
          city: {
              name: 'Oslo'
          }
        }
      }

      const fetchItems = jest.fn();
      const store = configureStore(mockStore);

      const wrapper = await mount(<Provider store={store}>
          <ConnectedChart dispatch={fetchItems}/></Provider>);
      
      console.log(wrapper.debug());

      wrapper.find(ConnectedChart).prop('city').should.equal('test');
      // setTimeout(() => done(), 1000);

    });
});

//test dispatching (hasErrored)as a jest function if the property was called

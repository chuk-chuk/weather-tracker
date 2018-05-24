import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar }  from './';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchBar', () => {

    it('should call searchQuery when the input value has changed', () => {

        const searchQuery = jest.fn();
        const wrapper = shallow(<SearchBar searchQuery={searchQuery} />);

        wrapper.find('input').simulate('change', { target: { value: 'Oslo' }});
        expect(searchQuery).toBeCalledWith('Oslo');
    });

    it('should call fetchItems when the form is submitted', () => { 

        const event = {
            target: {
                reset: () => {}
            },
            preventDefault: () => {}
        }

        const fetchItems = jest.fn();
        const searchQuery = jest.fn();

        const wrapper = shallow(<SearchBar fetchItems={fetchItems} searchQuery={searchQuery} />);
        
        wrapper.setProps({
            cityName: 'London'
        })

        wrapper.find('form').prop('onSubmit')(event)
        expect(fetchItems).toBeCalledWith('London');
    });

    

});

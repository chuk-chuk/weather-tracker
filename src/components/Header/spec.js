import React from 'react';
import {shallow} from 'enzyme';

import Header from '.';

describe('<Header />', () => {

    it('should render header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header')).toHaveLength(1);

    });

});

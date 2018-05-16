import React from 'react';
import './styles.css';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">Global Weather Search</h1>
        </header>
    );
};

export default Header;

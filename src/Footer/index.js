import React, { Component } from 'react';
import './styles.css';

const today = new Date();

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isJune2018Already: today.getTime() > (new Date(2018, 6, 1, 0, 0, 0, 0)).getTime(),
        };
    }

    render() {
        return (
            <footer className="footer">
                <p>&copy; {today.getFullYear()} currencytracker.com. All rights reserved. 
                {this.state.isJune2018Already ? ' Currency after June 2018' : ' Currency before June 2018'}.</p>
            </footer>
        );
    }
}


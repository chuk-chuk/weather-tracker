import React, { Component } from 'react';
import './styles.css';
import Chart from '../Chart';
import DatePicker from 'react-date-picker';

export default class Display extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
        <div className="display">
        <Chart />
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

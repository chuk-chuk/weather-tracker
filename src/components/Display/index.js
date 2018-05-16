import React, { Component } from 'react';
import './styles.css';
import Chart from '../Chart';
import Gmaps from '../Gmaps';
import SearchBar from '../SearchBar';

export default class Display extends Component {

  render() {
    return (
        <div className="display">
        <SearchBar />
        <Chart />
        <Gmaps />
      </div>
    );
  }
}

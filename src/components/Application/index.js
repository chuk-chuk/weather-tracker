import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Chart from '../Chart';
import Error from '../Error';
import SearchBar from '../SearchBar';
import Gmaps from '../Gmaps';
import './styles.css';

class Application extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <SearchBar />
        <Error />
        <Chart />
        <Gmaps />
        <Footer />
      </div>
    );
  }
}

export default Application;

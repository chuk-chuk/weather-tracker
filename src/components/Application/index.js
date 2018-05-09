import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import Display from '../Display';

class Application extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Display />
        <Footer />
      </div>
    );
  }
}

export default Application;

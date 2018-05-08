import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';

class Application extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Application;

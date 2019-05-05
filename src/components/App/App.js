import React, { Component } from 'react';
import Header from '../template/Header/Header';
import Main from '../template/Main/Main';
import Footer from '../template/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

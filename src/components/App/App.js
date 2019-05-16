import React, { Fragment } from 'react';
import Navigation from '../template/Navigation/Navigation';
import Header from '../template/Header/Header';
import Main from '../template/Main/Main';
import Footer from '../template/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <div className='container'>
        <Header />
        <Main />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;

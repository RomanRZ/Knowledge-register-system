import React from 'react';

import Slider from './Slider/Slider';
import { Context } from '../../Provider/Provider';
import './Header.scss';

const Header = () => {
  return (
    <Context.Consumer>
      {({ state: { menuIsShown }, toggleMenu }) => {
        return (
          <header className='header'>
            <h1 className='header__title'>Knowledge register system</h1>
            <div className='header__slider-block'>
              <Slider />
            </div>
          </header>
        );
      }}
    </Context.Consumer>
  );
};

export default Header;

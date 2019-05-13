import React from 'react';
import Logo from './Logo/Logo';
import Slider from './Slider/Slider';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <div>
        <Logo />
        <Slider />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

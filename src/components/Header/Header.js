import React from 'react';
import Logo from '../Logo/Logo';
import Slider from '../Slider/Slider';
import Navigation from '../Navigation/Navigation';
const Header = props => {
  return (
    <header>
      <h1>Header</h1>
      <Logo />
      <Slider />
      <Navigation />
    </header>
  );
};

export default Header;

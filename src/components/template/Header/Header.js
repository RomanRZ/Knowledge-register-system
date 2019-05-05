import React from 'react';
import Logo from './Logo/Logo';
import Slider from './Slider/Slider';
import Navigation from './Navigation/Navigation';
import { Context } from '../../Provider/Provider';
const Header = props => {
  return (
    <header>
      <h1>Header</h1>
      <Context.Consumer>
        {({ state: { managerIsLogged, coderIsLogged }, logOut }) => {
          return (
            <div>
              <Logo />
              <Slider />
              <Navigation />
              {managerIsLogged || coderIsLogged ? (
                <div onClick={logOut}>Выйти</div>
              ) : null}
            </div>
          );
        }}
      </Context.Consumer>
    </header>
  );
};

export default Header;

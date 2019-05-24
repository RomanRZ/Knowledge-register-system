import React from 'react';
import Logo from './Logo/Logo';
import { Context } from '../../Provider/Provider';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import toggle from '../../../img/burger-menu.png';

const Navigation = () => {
  return (
    <Context.Consumer>
      {({
        state: { managerIsLogged, coderIsLogged, menuIsShown },
        toggleMenu,
        logOut
      }) => {
        let cls = 'nav';
        cls = menuIsShown ? (cls += ' nav--show-menu') : 'nav';
        return (
          <div className={cls}>
            <div className='nav__row'>
              <Logo />
              <div className='nav__toggle'>
                <img
                  src={toggle}
                  alt='burger'
                  className='nav__btn'
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <ul className='nav__list'>
              <li className='nav__item nav__item--vertical-row'>
                <NavLink
                  exact
                  activeClassName='nav__active-route'
                  className='nav__link'
                  to='/'
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className='nav__item nav__item--vertical-row'>
                <NavLink
                  activeClassName='nav__active-route'
                  className='nav__link'
                  to='/gallery'
                  onClick={toggleMenu}
                >
                  Gallery
                </NavLink>
              </li>
              <li className='nav__item nav__item--vertical-row'>
                <NavLink
                  activeClassName='nav__active-route'
                  className='nav__link'
                  to='/managers-block'
                  onClick={toggleMenu}
                >
                  Manager's Block
                </NavLink>
              </li>
              <li className='nav__item nav__item--vertical-row'>
                <NavLink
                  activeClassName='nav__active-route'
                  className='nav__link'
                  to='/coders-block'
                  onClick={toggleMenu}
                >
                  Coder's Block
                </NavLink>
              </li>
              <li className='nav__item nav__item--vertical-row'>
                <NavLink
                  activeClassName='nav__active-route'
                  className='nav__link'
                  to='/contacts'
                  onClick={toggleMenu}
                >
                  Contacts
                </NavLink>
              </li>

              <li className='nav__item'>
                {managerIsLogged || coderIsLogged ? (
                  <div
                    className='nav__link'
                    onClick={() => {
                      logOut();
                      toggleMenu();
                    }}
                  >
                    Quit
                  </div>
                ) : (
                  <NavLink
                    activeClassName='nav__active-route'
                    className='nav__link'
                    to='/logAndReg'
                    onClick={toggleMenu}
                  >
                    Authorization / Registration
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Navigation;

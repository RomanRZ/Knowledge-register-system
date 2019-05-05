import React from 'react';
import { Context } from '../../../Provider/Provider';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Context.Consumer>
      {({ logOut, state: { managerIsLogged, coderIsLogged } }) => {
        return (
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/managers-block'>Manager's Block</Link>
            </li>
            <li>
              <Link to='/coders-block'>Coder's Block</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>

            <li>
              {managerIsLogged || coderIsLogged ? (
                <div onClick={logOut}>Quit</div>
              ) : (
                <Link to='/logAndReg'>Registration</Link>
              )}
            </li>
          </ul>
        );
      }}
    </Context.Consumer>
  );
};

export default Navigation;

import React, { Fragment } from 'react';
import Registration from './Registration/Registration';
import Auth from './Auth/Auth';
import Input from '../../UI/Input/Input';
import { Context } from '../../Provider/Provider';

const LogAndReg = () => {
  return (
    <Context.Consumer>
      {({ state: { coderIsLogged, managerIsLogged }, logOut }) => {
        let user = null;
        if (coderIsLogged || managerIsLogged) {
          coderIsLogged ? (user = 'Programmer') : (user = 'Manager');
        }
        return (
          <div>
            {user ? (
              <Fragment>
                <h3>You logged in as {user}</h3>
                <Input
                  inputType='button'
                  inputValue='Log out'
                  inputOnclick={logOut}
                />
              </Fragment>
            ) : (
              <Fragment>
                <Auth />
                <Registration />
              </Fragment>
            )}
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default LogAndReg;

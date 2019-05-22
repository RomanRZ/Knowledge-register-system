import React, { Fragment } from 'react';
import RegistrationContainer from '../../../сontainers/RegistrationContainer';
import AuthContainer from '../../../сontainers/AuthContainer';
import Input from '../../UI/Input/Input';
import { Context } from '../../Provider/Provider';
import './LogAndReg.scss';

const LogAndReg = () => {
  return (
    <Context.Consumer>
      {({
        state: { coderIsLogged, managerIsLogged, staff, alreadyRegistered },
        logOut,
        authCoder,
        authManager,
        addPerson
      }) => {
        let user = null;
        if (coderIsLogged || managerIsLogged) {
          coderIsLogged ? (user = 'Programmer') : (user = 'Manager');
        }

        return (
          <div className='log-reg'>
            {user ? (
              <Fragment>
                <h3 className='log-reg__curent-user'>
                  You logged in as {user}
                </h3>
                <Input
                  inputClassName='log-reg__button'
                  inputType='button'
                  inputValue='Log out'
                  inputOnclick={logOut}
                />
              </Fragment>
            ) : (
              <Fragment>
                <AuthContainer
                  staff={staff}
                  authCoder={authCoder}
                  authManager={authManager}
                />
                <RegistrationContainer
                  alreadyRegistered={alreadyRegistered}
                  addPerson={addPerson}
                />
              </Fragment>
            )}
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default LogAndReg;

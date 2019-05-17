import React from 'react';
import Input from '../../../UI/Input/Input';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import { Context } from '../../../Provider/Provider';
import './Auth.scss';

const Auth = () => {
  return (
    <div className='auth'>
      <h3 className='auth__title'>Authorization</h3>
      <Context.Consumer>
        {({
          state: {
            auth: { name, password },
            validation: {
              authorization: {
                formValid,
                formErrors,
                formErrors: { nameErrorMessage, passwordErrorMessage }
              }
            },
            userIsNotCreated
          },
          authSubmitHandler,
          authChangeHandler
        }) => {
          let inputNameCls = 'auth__input';
          let inputPassCls = 'auth__input';
          if (nameErrorMessage !== '') {
            inputNameCls += ' auth__input--error';
          }
          if (passwordErrorMessage !== '') {
            inputPassCls += ' auth__input--error';
          }
          return (
            <form className='auth__form' onSubmit={authSubmitHandler}>
              <Input
                labelClassName='auth__label'
                inputClassName={inputNameCls}
                labelName='Name'
                inputName='name'
                inputType='text'
                inputValue={name}
                inputChangeHandler={authChangeHandler}
                inputPlaceholder='Enter name..'
              />
              <Input
                labelClassName='auth__label'
                inputClassName={inputPassCls}
                labelName='Password'
                inputName='password'
                inputType='password'
                inputValue={password}
                inputChangeHandler={authChangeHandler}
                inputPlaceholder='Enter password..'
              />
              {userIsNotCreated !== '' ? <div>{userIsNotCreated}</div> : null}
              <FormErrors formErrors={formErrors} />
              <Input
                inputClassName='auth__submit'
                inputType='submit'
                inputValue='Log IN'
                inputDisabled={!formValid}
              />
            </form>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default Auth;

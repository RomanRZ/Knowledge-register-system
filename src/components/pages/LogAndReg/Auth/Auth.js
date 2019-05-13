import React from 'react';
import Input from '../../../UI/Input/Input';
import { Context } from '../../../Provider/Provider';

const Auth = () => {
  return (
    <div>
      <h3>Authorization</h3>
      <Context.Consumer>
        {({
          state: {
            auth: { name, password }
          },
          authSubmitHandler,
          authChangeHandler
        }) => {
          return (
            <form onSubmit={authSubmitHandler}>
              <Input
                labelName='Name'
                inputName='name'
                inputType='text'
                inputValue={name}
                inputChangeHandler={authChangeHandler}
                inputPlaceholder='Enter name..'
              />
              <Input
                labelName='Password'
                inputName='password'
                inputType='password'
                inputValue={password}
                inputChangeHandler={authChangeHandler}
                inputPlaceholder='Enter password..'
              />
              <Input inputType='submit' inputValue='Log IN' />
            </form>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default Auth;

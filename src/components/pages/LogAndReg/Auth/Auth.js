import React from 'react';
import Input from '../../../UI/Input/Input';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import { Context } from '../../../Provider/Provider';

const Auth = () => {
  return (
    <div>
      <h3>Authorization</h3>
      <Context.Consumer>
        {({
          state: {
            auth: { name, password },
            validation: {
              authorization: { formValid, formErrors }
            },
            userIsNotCreated
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
              {userIsNotCreated !== '' ? <div>{userIsNotCreated}</div> : null}
              <FormErrors formErrors={formErrors} />
              <Input
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

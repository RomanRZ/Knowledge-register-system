import React from 'react';
import Input from '../../../UI/Input/Input';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import './Auth.scss';

const Auth = props => {
  const {
    name,
    password,
    nameError,
    passwordError,
    userIsNotCreated,
    formValid,
    formErrors,
    changeHandler,
    submitHandler
  } = props;
  let inputNameCls = 'auth__input';
  let inputPassCls = 'auth__input';
  if (nameError !== '') {
    inputNameCls += ' auth__input--error';
  }
  if (passwordError !== '') {
    inputPassCls += ' auth__input--error';
  }
  return (
    <div className='auth'>
      <h3 className='auth__title'>Authorization</h3>
      <form className='auth__form' onSubmit={submitHandler}>
        <Input
          labelClassName='auth__label'
          inputClassName={inputNameCls}
          labelName='Name'
          inputName='name'
          inputType='text'
          inputValue={name}
          inputChangeHandler={changeHandler}
          inputPlaceholder='Enter name..'
        />
        <Input
          labelClassName='auth__label'
          inputClassName={inputPassCls}
          labelName='Password'
          inputName='password'
          inputType='password'
          inputValue={password}
          inputChangeHandler={changeHandler}
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
    </div>
  );
};

export default Auth;

import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import './Registration.scss';

const Registration = ({
  alreadyRegistered,
  name,
  password,
  category,
  formValid,
  formErrors,
  formErrors: { nameError, passwordError },
  submitHandler,
  сhangeHandler
}) => {
  let inputNameCls = 'registration__input';
  let inputPassCls = 'registration__input';
  if (nameError !== '') {
    inputNameCls += ' registration__input--error';
  }
  if (passwordError !== '') {
    inputPassCls += ' registration__input--error';
  }

  return (
    <div className='registration'>
      <form className='registration__form' onSubmit={submitHandler}>
        <h3 className='registration__title'>Registration</h3>

        <label>
          Category
          <Select
            selectClassName='registration__select'
            selectWrapClassName='registration__select-wrap'
            selectButtonClassName='registration__select-button'
            selectButtonValue={category}
            labelName='Category'
            selectName='category'
            selectValue={category}
            selectInfo={{
              select: '--select--',
              manager: 'Manager',
              coder: 'Programmer'
            }}
            selectHandler={сhangeHandler}
          />
        </label>
        <Input
          inputClassName={inputNameCls}
          labelClassName='registration__label'
          labelName='Name'
          inputType='text'
          inputName='name'
          inputValue={name}
          inputChangeHandler={сhangeHandler}
          inputPlaceholder='Enter Name..'
        />
        <Input
          inputClassName={inputPassCls}
          labelClassName='registration__label'
          labelName='Password'
          inputType='password'
          inputName='password'
          inputValue={password}
          inputChangeHandler={сhangeHandler}
          inputPlaceholder='Enter Password..'
        />
        <Input
          inputClassName='registration__submit'
          inputType='submit'
          inputValue='Register'
          inputDisabled={!formValid}
        />
      </form>
      <FormErrors
        alreadyRegistered={alreadyRegistered}
        formErrors={formErrors}
      />
    </div>
  );
};

export default Registration;

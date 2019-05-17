import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import { Context } from '../../../Provider/Provider';
import './Registration.scss';

const Registration = () => {
  return (
    <Context.Consumer>
      {({
        state: {
          alreadyRegistered,
          registration: { name, password, category },
          validation: {
            registration: {
              formValid,
              formErrors,
              formErrors: { nameErrorMessage, passwordErrorMessage }
            }
          }
        },
        regSubmitHandler,
        regChangeHandler
      }) => {
        let inputNameCls = 'registration__input';
        let inputPassCls = 'registration__input';
        if (nameErrorMessage !== '') {
          inputNameCls += ' registration__input--error';
        }
        if (passwordErrorMessage !== '') {
          inputPassCls += ' registration__input--error';
        }

        return (
          <div className='registration'>
            <form className='registration__form' onSubmit={regSubmitHandler}>
              <h3 className='registration__title'>Registration</h3>

              <Select
                selectClassName='registration__select'
                selectWrapClassName='registration__select-wrap'
                selectButtonClassName='registration__select-button'
                selectButtonValue='Choose category'
                labelName='Category'
                selectName='category'
                selectValue={category}
                selectInfo={{
                  select: '--select--',
                  manager: 'Manager',
                  coder: 'Programmer'
                }}
                selectHandler={regChangeHandler}
              />
              <Input
                inputClassName={inputNameCls}
                labelClassName='registration__label'
                labelName='Name'
                inputType='text'
                inputName='name'
                inputValue={name}
                inputChangeHandler={regChangeHandler}
                inputPlaceholder='Enter Name..'
              />
              <Input
                inputClassName={inputPassCls}
                labelClassName='registration__label'
                labelName='Password'
                inputType='password'
                inputName='password'
                inputValue={password}
                inputChangeHandler={regChangeHandler}
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
      }}
    </Context.Consumer>
  );
};

export default Registration;

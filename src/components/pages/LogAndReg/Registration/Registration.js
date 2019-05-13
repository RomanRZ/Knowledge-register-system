import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import { Context } from '../../../Provider/Provider';

const Registration = () => {
  return (
    <Context.Consumer>
      {({
        state: {
          registration: { name, password, category },
          validation: {
            registration: { formValid, formErrors }
          }
        },
        regSubmitHandler,
        regChangeHandler
      }) => {
        return (
          <div>
            <form onSubmit={regSubmitHandler}>
              <h3>Registration</h3>

              <Select
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
                labelName='Name'
                inputType='text'
                inputName='name'
                inputValue={name}
                inputChangeHandler={regChangeHandler}
                inputPlaceholder='Enter Name..'
              />
              <Input
                labelName='Password'
                inputType='password'
                inputName='password'
                inputValue={password}
                inputChangeHandler={regChangeHandler}
                inputPlaceholder='Enter Password..'
              />
              <Input
                inputType='submit'
                inputValue='Register'
                inputDisabled={!formValid}
              />
            </form>
            <FormErrors formErrors={formErrors} />
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Registration;

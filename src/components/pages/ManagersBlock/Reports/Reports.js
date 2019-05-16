import React from 'react';
import Input from '../../../UI/Input/Input';
import NumberOfPeople from './NumberOfPeople/NumberOfPeople';
import Sex from './Sex/Sex';
import Age from './Age/Age';
import Salary from './Salary/Salary';
import { Context } from '../../../Provider/Provider';
import './Reports.scss';

const Reports = () => {
  return (
    <Context.Consumer>
      {({
        state,
        state: {
          reports: { numberOfPeople, sex, age, salary }
        },
        reportsSubmitHandler,
        reportsChangeHandler
      }) => {
        return (
          <div className='reports'>
            <h3 className='reports__title'>Reports</h3>
            <form className='reports__form' onSubmit={reportsSubmitHandler}>
              <Input
                labelName='Number of people'
                labelClassName='reports__label'
                inputClassName='reports__checkbox'
                inputType='checkbox'
                inputName='numberOfPeople'
                inputChecked={numberOfPeople}
                inputChangeHandler={reportsChangeHandler}
              />
              <Input
                labelName='Sex'
                labelClassName='reports__label'
                inputClassName='reports__checkbox'
                inputType='checkbox'
                inputName='sex'
                inputChecked={sex}
                inputChangeHandler={reportsChangeHandler}
              />
              <Input
                labelName='Age report'
                labelClassName='reports__label'
                inputClassName='reports__checkbox'
                inputType='checkbox'
                inputName='age'
                inputChecked={age}
                inputChangeHandler={reportsChangeHandler}
              />
              <Input
                labelName='Salary'
                labelClassName='reports__label'
                inputClassName='reports__checkbox'
                inputType='checkbox'
                inputName='salary'
                inputChecked={salary}
                inputChangeHandler={reportsChangeHandler}
              />
            </form>
            {numberOfPeople && <NumberOfPeople state={state} />}
            {sex && <Sex state={state} />}
            {age && <Age state={state} />}
            {salary && <Salary state={state} />}
          </div>
        );
      }}
    </Context.Consumer>
  );
};
export default Reports;

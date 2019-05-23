import React from 'react';
import Input from '../../../UI/Input/Input';
import NumberOfPeople from './NumberOfPeople/NumberOfPeople';
import Sex from './Sex/Sex';
import Age from './Age/Age';
import Salary from './Salary/Salary';
import './Reports.scss';

const Reports = ({
  state,
  numberOfPeople,
  sex,
  age,
  salary,
  submitHandler,
  changeHandler
}) => {
  let clsPeople = 'reports__label';
  let clsSex = 'reports__label';
  let clsAge = 'reports__label';
  let clsSalary = 'reports__label';
  if (numberOfPeople) {
    clsPeople += ' reports__label--checked';
  }
  if (sex) {
    clsSex += ' reports__label--checked';
  }
  if (age) {
    clsAge += ' reports__label--checked';
  }
  if (salary) {
    clsSalary += ' reports__label--checked';
  }
  return (
    <div className='reports'>
      <h3 className='reports__title'>Reports</h3>
      <form className='reports__form' onSubmit={submitHandler}>
        <Input
          labelName='Number of people'
          labelClassName={clsPeople}
          inputClassName='reports__checkbox'
          inputType='checkbox'
          inputName='numberOfPeople'
          inputChecked={numberOfPeople}
          inputChangeHandler={changeHandler}
        />
        <Input
          labelName='Sex'
          labelClassName={clsSex}
          inputClassName='reports__checkbox'
          inputType='checkbox'
          inputName='sex'
          inputChecked={sex}
          inputChangeHandler={changeHandler}
        />
        <Input
          labelName='Age report'
          labelClassName={clsAge}
          inputClassName='reports__checkbox'
          inputType='checkbox'
          inputName='age'
          inputChecked={age}
          inputChangeHandler={changeHandler}
        />
        <Input
          labelName='Salary'
          labelClassName={clsSalary}
          inputClassName='reports__checkbox'
          inputType='checkbox'
          inputName='salary'
          inputChecked={salary}
          inputChangeHandler={changeHandler}
        />
      </form>
      <div className='reports__result'>
        {numberOfPeople && <NumberOfPeople state={state} />}
        {sex && <Sex state={state} />}
        {age && <Age state={state} />}
        {salary && <Salary state={state} />}
      </div>
    </div>
  );
};
export default Reports;

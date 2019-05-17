import React from 'react';
import './Salary.scss';

const Salary = props => {
  const { coders } = props.state.staff;

  // All
  const total = coders.reduce((acc, el) => {
    return acc + el.salary;
  }, 0);

  const average = Math.round(total / coders.length);
  const allSalaries = coders.map(el => el.salary);
  const min = Math.min(...allSalaries);
  const max = Math.max(...allSalaries);

  // Jun
  const totalJun = coders.reduce((acc, el) => {
    return el.competence === 'junior' ? acc + el.salary : acc;
  }, 0);

  const allJunSalaries = coders
    .filter(el => (el.competence === 'junior' ? true : false))
    .map(el => el.salary);
  const averageJun = Math.round(totalJun / allJunSalaries.length);
  const minJun = Math.min(...allJunSalaries);
  const maxJun = Math.max(...allJunSalaries);
  // Mid
  const totalMid = coders.reduce((acc, el) => {
    return el.competence === 'middle' ? acc + el.salary : acc;
  }, 0);

  const allMidSalaries = coders
    .filter(el => (el.competence === 'middle' ? true : false))
    .map(el => el.salary);
  const averageMid = Math.round(totalMid / allMidSalaries.length);
  const minMid = Math.min(...allMidSalaries);
  const maxMid = Math.max(...allMidSalaries);
  // Sen
  const totalSen = coders.reduce((acc, el) => {
    return el.competence === 'senior' ? acc + el.salary : acc;
  }, 0);

  const allSenSalaries = coders
    .filter(el => (el.competence === 'senior' ? true : false))
    .map(el => el.salary);
  const averageSen = Math.round(totalSen / allSenSalaries.length);
  const minSen = Math.min(...allSenSalaries);
  const maxSen = Math.max(...allSenSalaries);
  return (
    <div className='salary'>
      <h3 className='salary__title'>Salary report</h3>
      <h4 className='salary__subtitle'>IN GENERAL:</h4>
      <p className='salary__content'>
        Minimal salary: {min}, Average salary: {average},Maximum salary: {max}
      </p>
      <h4 className='salary__subtitle'>Juniors:</h4>
      <p className='salary__content'>
        Minimal salary: {minJun}, Average salary: {averageJun}, Maximum salary:{' '}
        {maxJun}
      </p>
      <h4 className='salary__subtitle'>Middles:</h4>
      <p className='salary__content'>
        Minimal salary: {minMid}, Average salary: {averageMid}, Maximum salary:{' '}
        {maxMid}
      </p>
      <h4 className='salary__subtitle'>Seniors:</h4>
      <p className='salary__content'>
        Minimal salary: {minSen}, Average salary: {averageSen}, Maximum salary:{' '}
        {maxSen}
      </p>
    </div>
  );
};

export default Salary;

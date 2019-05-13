import React from 'react';

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
    <div>
      <h3>Salary report</h3>
      <p>
        Min: {min}, Average: {average}, Max: {max}
      </p>
      <p>
        Jun min: {minJun}, jun aver: {averageJun}, jun max: {maxJun}
      </p>
      <p>
        mid min: {minMid}, mid aver: {averageMid}, mid max: {maxMid}
      </p>
      <p>
        sen min: {minSen}, sen aver: {averageSen}, sen max: {maxSen}
      </p>
    </div>
  );
};

export default Salary;

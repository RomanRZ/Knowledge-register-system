import React from 'react';

const NumberOfPeople = props => {
  const { coders } = props.state.staff;
  const totalNumber = coders.length;
  const numberOfJuns = coders.filter(el =>
    el.competence === 'junior' ? true : false
  ).length;
  const numberOfMids = coders.filter(el =>
    el.competence === 'middle' ? true : false
  ).length;
  const numberOfSens = coders.filter(el =>
    el.competence === 'senior' ? true : false
  ).length;

  return (
    <div>
      <h3>Number of people report</h3>
      <p>Total number of programmers: {totalNumber}</p>
      <p>Number of Juns: {numberOfJuns}</p>
      <p>Number of Mids: {numberOfMids}</p>{' '}
      <p>Number of Sens: {numberOfSens}</p>
    </div>
  );
};

export default NumberOfPeople;

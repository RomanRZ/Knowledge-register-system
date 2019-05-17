import React from 'react';
import './NumberOfPeople.scss';

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
    <div className='people'>
      <h3 className='people__title'>Number of people report</h3>
      <p className='people__value'>
        <span className='people__total'>
          Total number of programmers: {totalNumber}
        </span>
      </p>
      <p className='people__value'>Number of Juniors: {numberOfJuns}</p>
      <p className='people__value'>Number of Middles: {numberOfMids}</p>{' '}
      <p className='people__value'>Number of Seniors: {numberOfSens}</p>
    </div>
  );
};

export default NumberOfPeople;

import React from 'react';
import './Sex.scss';

const Sex = props => {
  const { coders } = props.state.staff;
  const male = coders.reduce((acc, el) => {
    return el.sex === 'male' ? acc + 1 : acc;
  }, 0);
  const female = coders.reduce((acc, el) => {
    return el.sex === 'female' ? acc + 1 : acc;
  }, 0);
  return (
    <div className='sex'>
      <h3 className='sex__title'>Sex report</h3>
      <p className='sex__content'>
        Male: {male}, Female: {female}
      </p>
    </div>
  );
};

export default Sex;

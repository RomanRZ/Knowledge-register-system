import React from 'react';

const Sex = props => {
  const { coders } = props.state.staff;
  const male = coders.reduce((acc, el) => {
    return el.sex === 'male' ? acc + 1 : acc;
  }, 0);
  const female = coders.reduce((acc, el) => {
    return el.sex === 'female' ? acc + 1 : acc;
  }, 0);
  return (
    <div>
      <h3>Sex report</h3>
      <p>
        Male: {male}, Female: {female}
      </p>
    </div>
  );
};

export default Sex;

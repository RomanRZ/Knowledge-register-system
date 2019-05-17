import React from 'react';
import './Age.scss';

const Age = props => {
  const { coders } = props.state.staff;
  // All
  const ages = coders.map(el => el.age);
  const total = coders.reduce((acc, el) => {
    return acc + el.age;
  }, 0);
  const min = Math.min(...ages);
  const average = Math.round(total / coders.length);
  const max = Math.max(...ages);
  // Jun age
  const junAges = coders
    .filter(el => (el.competence === 'junior' ? true : false))
    .map(el => el.age);
  const totalJunAges = junAges.reduce((acc, el) => {
    return acc + el;
  }, 0);
  const minJun = Math.min(...junAges);
  const averageJun = Math.round(totalJunAges / junAges.length);
  const maxJun = Math.max(...junAges);

  // Mid age
  const midAges = coders
    .filter(el => (el.competence === 'middle' ? true : false))
    .map(el => el.age);
  const totalMidAges = midAges.reduce((acc, el) => {
    return acc + el;
  }, 0);
  const minMid = Math.min(...midAges);
  const averageMid = Math.round(totalMidAges / midAges.length);
  const maxMid = Math.max(...midAges);

  // Sen age
  const senAges = coders
    .filter(el => (el.competence === 'senior' ? true : false))
    .map(el => el.age);
  const totalSenAges = senAges.reduce((acc, el) => {
    return acc + el;
  }, 0);
  const minSen = Math.min(...senAges);
  const averageSen = Math.round(totalSenAges / senAges.length);
  const maxSen = Math.max(...senAges);

  return (
    <div className='age'>
      <h3 className='age__title'>Age report</h3>
      <h4 className='age__subtitle'>IN GENERAL:</h4>
      <p className='age__content'>
        Minimal age: {min}, Average age: {average}, Maximum age: {max}
      </p>
      <h4 className='age__subtitle'>Juniors:</h4>
      <p className='age__content'>
        Minimal age: {minJun}, Average age: {averageJun}, Maximum age: {maxJun}
      </p>
      <h4 className='age__subtitle'>Middles:</h4>
      <p className='age__content'>
        Minimal age: {minMid}, Average age: {averageMid}, Maximum age: {maxMid}
      </p>
      <h4 className='age__subtitle'>Seniors:</h4>
      <p className='age__content'>
        Minimal age: {minSen}, Average age: {averageSen}, Maximum age: {maxSen}
      </p>
    </div>
  );
};
export default Age;

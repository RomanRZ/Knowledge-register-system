import React from 'react';

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
    <div>
      <h3>Age report</h3>
      <p>
        Min age: {min}, Average age: {average}, Max age: {max}
      </p>
      <p>
        Jun min age: {minJun}, jun aver age: {averageJun}, jun max age: {maxJun}
      </p>
      <p>
        mid min age: {minMid}, mid aver age: {averageMid}, mid max age: {maxMid}
      </p>
      <p>
        sen min age: {minSen}, sen aver age: {averageSen}, sen max age: {maxSen}
      </p>
    </div>
  );
};
export default Age;

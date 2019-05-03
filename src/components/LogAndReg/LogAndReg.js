import React from 'react';
import Registration from '../Registration/Registration';
import Log from '../Log/Log';

const LogAndReg = ({ state, addPerson, logIn }) => {
  return (
    <div>
      <Log state={state} logIn={logIn} />
      <Registration addPerson={addPerson} />
    </div>
  );
};

export default LogAndReg;

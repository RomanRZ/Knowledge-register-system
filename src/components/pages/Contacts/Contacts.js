import React from 'react';
import Maps from './Maps/Maps';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className='contacts'>
      <h3 className='contacts__title'>Contacts</h3>
      <h4 className='contacts__subtitle'>
        Ukrane, Kiev, Kudryashova 18, Phone: 044-555-444-888
      </h4>
      <Maps />
    </div>
  );
};

export default Contacts;

import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h3 className='not-found__title'>ERROR 404. Page not Found</h3>
      <p className='not-found__content'>Please, try correct address</p>
    </div>
  );
};

export default NotFound;

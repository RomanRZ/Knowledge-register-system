import React from 'react';
import './FormErrors.scss';

const FormErrors = ({ alreadyRegistered, formErrors }) => {
  return (
    <div className='form-errors'>
      {Object.keys(formErrors).map((error, index) => {
        if (formErrors[error] !== '') {
          return (
            <p className='form-errors__item' key={index}>
              {formErrors[error]}
            </p>
          );
        } else {
          return '';
        }
      })}
      <p>{alreadyRegistered}</p>
    </div>
  );
};

export default FormErrors;

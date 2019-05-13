import React from 'react';

const FormErrors = ({ formErrors }) => {
  return (
    <div>
      form errors:
      {Object.keys(formErrors).map((error, index) => {
        if (formErrors[error] !== '') {
          return <p key={index}>{formErrors[error]}</p>;
        } else {
          return '';
        }
      })}
    </div>
  );
};

export default FormErrors;

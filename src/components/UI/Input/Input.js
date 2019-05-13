import React from 'react';

const Input = ({
  labelName,
  inputType,
  inputName,
  inputValue,
  inputChecked,
  inputChangeHandler,
  inputOnclick,
  inputPlaceholder,
  inputDisabled
}) => {
  return (
    <label>
      {labelName}
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        checked={inputChecked}
        onChange={inputChangeHandler}
        onClick={inputOnclick}
        placeholder={inputPlaceholder}
        disabled={inputDisabled}
      />
    </label>
  );
};

export default Input;

import React from 'react';

const Input = ({
  labelName,
  labelClassName,
  inputClassName,
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
    <label className={labelClassName}>
      {labelName}
      <input
        type={inputType}
        className={inputClassName}
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

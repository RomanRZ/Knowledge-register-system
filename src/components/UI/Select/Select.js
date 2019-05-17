import React from 'react';
const Select = ({
  selectWrapClassName,
  selectClassName,
  selectButtonClassName,
  selectButtonValue,
  selectName,
  selectValue,
  selectInfo,
  selectHandler
}) => {
  return (
    <div className={selectWrapClassName}>
      <select
        className={selectClassName}
        name={selectName}
        value={selectValue}
        onChange={selectHandler}
      >
        {Object.entries(selectInfo).map(el => {
          return (
            <option key={el[0]} value={el[0]}>
              {el[1]}
            </option>
          );
        })}
      </select>
      <button type='button' tabIndex='-1' className={selectButtonClassName}>
        {selectButtonValue} &#x25bc;
      </button>
    </div>
  );
};

export default Select;

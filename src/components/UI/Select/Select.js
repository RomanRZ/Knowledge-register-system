import React from 'react';

const Select = ({
  labelName,
  selectName,
  selectValue,
  selectInfo,
  selectHandler
}) => {
  return (
    <label>
      {labelName}
      <select name={selectName} value={selectValue} onChange={selectHandler}>
        {Object.entries(selectInfo).map(el => {
          return (
            <option key={el[0]} value={el[0]}>
              {el[1]}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;

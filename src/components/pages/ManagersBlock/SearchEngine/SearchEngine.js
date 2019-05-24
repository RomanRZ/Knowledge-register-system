import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import SearchResult from './SearchResult/SearchResult';
import './SearchEngine.scss';

const SearchEngine = ({
  search,
  competence,
  expYears,
  skill,
  age,
  formValid,
  formErrors,
  formErrors: { expError, ageError },
  requestedCoders,
  changeHandler,
  submitHandler,
  sortSubmitHandler
}) => {
  let inputExpCls = 'search-engine__input';
  if (expError !== '') {
    inputExpCls += ' search-engine__input--error';
  }
  let inputAgeCls = 'search-engine__input';
  if (ageError !== '') {
    inputAgeCls += ' search-engine__input--error';
  }
  return (
    <div className='search-engine'>
      <h3 className='search-engine__title'>Search Engine</h3>
      <form className='search-engine__search-form' onSubmit={submitHandler}>
        <Input
          labelName='Search'
          labelClassName='search-engine__label'
          inputClassName='search-engine__input'
          inputType='text'
          inputName='search'
          inputValue={search}
          inputChangeHandler={changeHandler}
          inputPlaceholder='Search'
        />
        <label>
          Choose comptence of programmers
          <Select
            selectClassName='search-engine__select'
            selectWrapClassName='search-engine__select-wrap'
            selectButtonClassName='search-engine__select-button'
            selectButtonValue={competence}
            selectName='competence'
            selectValue={competence}
            selectInfo={{
              all: 'All',
              senior: 'Senior',
              middle: 'Middle',
              junior: 'Junior'
            }}
            selectHandler={changeHandler}
          />
        </label>
        <Input
          labelName='Minimum experience in years from'
          labelClassName='search-engine__label'
          inputClassName={inputExpCls}
          inputType='text'
          inputName='expYears'
          inputValue={expYears}
          inputChangeHandler={changeHandler}
          inputPlaceholder='Enter experience..'
        />
        <Input
          labelName='Age not more than'
          labelClassName='search-engine__label'
          inputClassName={inputAgeCls}
          inputType='text'
          inputName='age'
          inputValue={age}
          inputChangeHandler={changeHandler}
          inputPlaceholder='Enter maximum age'
        />
        <FormErrors formErrors={formErrors} />
        <Input
          inputClassName='search-engine__submit'
          inputType='submit'
          inputValue='Find coders'
          inputDisabled={!formValid}
        />
      </form>
      {requestedCoders.length !== 0 ? (
        <form
          className='search-engine__filter-form'
          onSubmit={sortSubmitHandler}
        >
          <label>
            Choose main skill
            <Select
              selectClassName='search-engine__select'
              selectWrapClassName='search-engine__select-wrap'
              selectButtonClassName='search-engine__select-button'
              selectButtonValue={skill}
              selectName='skill'
              selectValue={skill}
              selectInfo={{
                JS: 'JavaScript',
                IDE: 'IDE',
                bundlers: 'Bundlers',
                HtmlCss: 'HTML/CSS',
                preprocessors: 'Preprocessors',
                HtmlCssLibs: 'HTML/CSS libraries',
                JSlibs: 'JavaScript Libraries'
              }}
              selectHandler={changeHandler}
            />
          </label>
          <Input
            inputClassName='search-engine__submit'
            inputType='submit'
            inputValue='Sort by technology'
          />
        </form>
      ) : null}
      <h4>Result: {requestedCoders.length} programmers were found.</h4>
      <SearchResult requestedCoders={requestedCoders} />
    </div>
  );
};

export default SearchEngine;

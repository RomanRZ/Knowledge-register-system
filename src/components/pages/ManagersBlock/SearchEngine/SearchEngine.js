import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import FormErrors from '../../../UI/FormErrors/FormErrors';
import SearchResult from './SearchResult/SearchResult';
import { Context } from '../../../Provider/Provider';
import './SearchEngine.scss';

const SearchEngine = () => {
  return (
    <Context.Consumer>
      {({
        state: {
          searchEngine: { search, competence, expYears, skill, age },
          validation: {
            searchEngine: {
              formValid,
              formErrors,
              formErrors: { expErrorMessage, ageErrorMessage }
            }
          },
          requestedCoders
        },
        searchChangeHandler,
        searchSubmitHandler,
        searchSortSubmitHandler
      }) => {
        let inputExpCls = 'search-engine__input';
        if (expErrorMessage !== '') {
          inputExpCls += ' search-engine__input--error';
        }
        let inputAgeCls = 'search-engine__input';
        if (ageErrorMessage !== '') {
          inputAgeCls += ' search-engine__input--error';
        }
        return (
          <div className='search-engine'>
            <h3 className='search-engine__title'>Search Engine</h3>
            <form
              className='search-engine__search-form'
              onSubmit={searchSubmitHandler}
            >
              <Input
                labelName='Search'
                labelClassName='search-engine__label'
                inputClassName='search-engine__input'
                inputType='text'
                inputName='search'
                inputValue={search}
                inputChangeHandler={searchChangeHandler}
                inputPlaceholder='Search'
              />
              <Select
                selectClassName='search-engine__select'
                selectWrapClassName='search-engine__select-wrap'
                selectButtonClassName='search-engine__select-button'
                selectButtonValue='Choose category of programmers'
                selectName='competence'
                selectValue={competence}
                selectInfo={{
                  all: 'All',
                  senior: 'Senior',
                  middle: 'Middle',
                  junior: 'Junior'
                }}
                selectHandler={searchChangeHandler}
              />
              <Input
                labelName='Minimum experience from'
                labelClassName='search-engine__label'
                inputClassName={inputExpCls}
                inputType='text'
                inputName='expYears'
                inputValue={expYears}
                inputChangeHandler={searchChangeHandler}
                inputPlaceholder='Enter experience..'
              />
              <Input
                labelName='Age not more than'
                labelClassName='search-engine__label'
                inputClassName={inputAgeCls}
                inputType='text'
                inputName='age'
                inputValue={age}
                inputChangeHandler={searchChangeHandler}
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
                onSubmit={searchSortSubmitHandler}
              >
                <Select
                  selectClassName='search-engine__select'
                  selectWrapClassName='search-engine__select-wrap'
                  selectButtonClassName='search-engine__select-button'
                  selectButtonValue='Choose main skill'
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
                  selectHandler={searchChangeHandler}
                />
                <Input
                  inputClassName='search-engine__submit'
                  inputType='submit'
                  inputValue='Sort by technology'
                />
              </form>
            ) : null}
            <SearchResult requestedCoders={requestedCoders} />
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default SearchEngine;

import React from 'react';
import Input from '../../../UI/Input/Input';
import Select from '../../../UI/Select/Select';
import { Context } from '../../../Provider/Provider';

const SearchEngine = () => {
  return (
    <Context.Consumer>
      {({
        state: {
          searchEngine: { search, competence, expYears, skill, age },
          requestedCoders
        },
        searchChangeHandler,
        searchSubmitHandler,
        searchSortSubmitHandler
      }) => {
        return (
          <div>
            <h3>Search Engine</h3>
            <form onSubmit={searchSubmitHandler}>
              <Input
                inputType='text'
                inputName='search'
                inputValue={search}
                inputChangeHandler={searchChangeHandler}
                inputPlaceholder='Search'
              />
              <Select
                labelName='Competence'
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
                inputType='text'
                inputName='expYears'
                inputValue={expYears}
                inputChangeHandler={searchChangeHandler}
                inputPlaceholder='Enter experience..'
              />
              <Input
                labelName='Age not more then'
                inputType='text'
                inputName='age'
                inputValue={age}
                inputChangeHandler={searchChangeHandler}
                inputPlaceholder='Enter maximum age'
              />

              <Input inputType='submit' inputValue='Find coders' />
            </form>
            {requestedCoders.length !== 0 ? (
              <form onSubmit={searchSortSubmitHandler}>
                <Select
                  labelName='Skill'
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
                <input type='submit' value='Sort by technology' />
              </form>
            ) : null}
            {requestedCoders.map(person => {
              const {
                skills: {
                  JS,
                  IDE,
                  bundlers,
                  HtmlCss,
                  preprocessors,
                  HtmlCssLibs,
                  JSlibs
                }
              } = person;
              return (
                <div key={person.id}>
                  <h4>Name:{person.name}</h4>
                  <div>Position: {person.position}</div>
                  <div>Experience years: {person.experienceYears}</div>
                  <div>Age: {person.age}</div>
                  <div>Previous experience: {person.prevExperience}</div>
                  <h5>Skills</h5>
                  <ul>
                    <li>JS: {JS}</li>
                    <li>IDE: {IDE}</li>
                    <li>bundlers: {bundlers}</li>
                    <li>HTML/CSS: {HtmlCss}</li>
                    <li>preprocessors: {preprocessors}</li>
                    <li>HTML CSS libs: {HtmlCssLibs}</li>
                    <li>JS libs: {JSlibs}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default SearchEngine;

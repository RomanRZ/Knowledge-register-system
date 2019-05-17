import React from 'react';
import './SearchResult.scss';

const SearchResult = ({ requestedCoders }) => {
  return (
    <div className='search-result'>
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
          <div className='search-result__container' key={person.id}>
            <h4 className='search-result__title'>Name: {person.name}</h4>
            <div>Sex: {person.sex}</div>
            <div>Position: {person.position}</div>
            <div>Salary: {person.salary}</div>
            <div>Experience in years: {person.experienceYears}</div>
            <div>Experience in months: {person.experienceMonths}</div>
            <div>Age: {person.age}</div>
            <div>Previous experience: {person.prevExperience}</div>
            <h5 className='search-result__subtitle'>Skills</h5>
            <ul className='search-result__skills-list'>
              <li className='search-result__skill'>JS: {JS}</li>
              <li className='search-result__skill'>IDE: {IDE}</li>
              <li className='search-result__skill'>bundlers: {bundlers}</li>
              <li className='search-result__skill'>HTML/CSS: {HtmlCss}</li>
              <li className='search-result__skill'>
                preprocessors: {preprocessors}
              </li>
              <li className='search-result__skill'>
                HTML CSS libs: {HtmlCssLibs}
              </li>
              <li className='search-result__skill'>JS libs: {JSlibs}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;

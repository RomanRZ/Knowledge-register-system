import React, { Component } from 'react';

export default class ManagersBlock extends Component {
  state = {
    competence: 'all',
    expYears: '',
    age: '',
    skill: 'JS'
  };
  inputHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  };
  submitHandler = e => {
    const { competence, expYears, age } = this.state;
    const { requestHandler } = this.props;
    requestHandler(competence, expYears, age);
    e.preventDefault();
  };
  sortSubmitHandler = e => {
    const { skill } = this.state;
    const { sortBy } = this.props;
    sortBy(skill);
    e.preventDefault();
  };
  render() {
    const { competence, expYears, skill, age } = this.state;
    const { state } = this.props;
    const { requestedCoders } = state;
    console.log(requestedCoders.length);
    return (
      <div>
        <h3>Manager's block</h3>
        <form onSubmit={this.submitHandler}>
          <select
            name='competence'
            value={competence}
            onChange={this.inputHandler}
          >
            <option value='all'>All</option>
            <option value='senior'>Senior</option>
            <option value='middle'>Middle</option>
            <option value='junior'>Junior</option>
          </select>
          <label>
            Years of Experience
            <input
              type='text'
              name='expYears'
              value={expYears}
              onChange={this.inputHandler}
            />
          </label>
          <label>
            Age not more then
            <input
              type='text'
              name='age'
              value={age}
              onChange={this.inputHandler}
            />
          </label>
          <input type='submit' value='Find coders' />
        </form>
        {requestedCoders.length !== 0 ? (
          <form onSubmit={this.sortSubmitHandler}>
            <select name='skill' value={skill} onChange={this.inputHandler}>
              <option value='JS'>JavaScript</option>
              <option value='IDE'>IDE</option>
              <option value='bundlers'>Bundlers</option>
              <option value='HtmlCss'>HTML/CSS</option>
              <option value='preprocessors'>Preprocessors</option>
              <option value='HtmlCssLibs'>HTML/CSS libraries</option>
              <option value='JSlibs'>JavaScript Libraries</option>
            </select>
            <input type='submit' value='Sort' />
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
  }
}

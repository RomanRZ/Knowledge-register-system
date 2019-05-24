import React, { Component } from 'react';
import SearchEngine from '../components/pages/ManagersBlock/SearchEngine/SearchEngine';

export default class SearchEngineContainer extends Component {
  state = {
    search: '',
    competence: 'all',
    expYears: '',
    age: '',
    skill: 'JS',
    requestedCoders: [],
    formValid: true,
    expYearsValid: true,
    ageValid: true,
    formErrors: {
      expError: '',
      ageError: ''
    }
  };

  requestHandler = (search, competence, expYears, age) => {
    const {
      staff: { coders }
    } = this.props.state;
    const requiredCoders = coders
      // Search
      .filter(person => {
        if (search === '') {
          return true;
        }
        if (search !== '') {
          const values = [];
          for (let key in person) {
            if (typeof person[key] === 'string') {
              values.push(person[key].toLowerCase());
            }
          }
          for (let i = 0; i < values.length; i++) {
            if (values[i].indexOf(search.toLowerCase()) >= 0) {
              return true;
            }
          }
        }
        return false;
      })
      // Competence
      .filter(person => {
        if (competence === 'all') {
          return true;
        }
        if (person.competence === competence) {
          return true;
        }
        return false;
      })
      // Experience in years
      .filter(person => {
        if (expYears !== '' && person.experienceYears >= expYears) {
          return true;
        }
        if (expYears === '') {
          return true;
        }
        return false;
      })
      // Age
      .filter(person => {
        if (age !== '') {
          if (person.age > age) {
            return false;
          }
        }
        return true;
      })
      // Is programmer full?
      .filter(person => {
        if (person.fullyRegistered) {
          return true;
        }
        return false;
      });

    this.setState({ requestedCoders: requiredCoders });
  };

  sortBy = skill => {
    const { requestedCoders } = this.state;
    const sortedCoders = requestedCoders.map(person => {
      return { ...person, skills: { ...person.skills } };
    });
    sortedCoders.sort((a, b) => {
      if (a.skills[skill] > b.skills[skill]) return -1;
      if (a.skills[skill] < b.skills[skill]) return 1;
      return 0;
    });
    this.setState({ requestedCoders: sortedCoders });
  };
  // Search engine validation
  validateField = (fieldName, value) => {
    let {
      expYearsValid,
      ageValid,
      formErrors,
      formErrors: { expError, ageError }
    } = this.state;
    switch (fieldName) {
      case 'expYears':
        // expYearsValid = value.match(/^[1-9]?[0-9]?$/) ? true : false;
        if (value !== '') {
          value = Number(value);
          expYearsValid =
            typeof value === 'number' && value >= 0 && value <= 50;
          expError = expYearsValid
            ? ''
            : 'Experience error. Number from 0 to 50';
        }
        if (value === '') {
          expError = true;
          expError = '';
        }
        break;
      case 'age':
        // ageValid = value.match(/^([1-9][0-9])?$/) ? true : false;
        if (value !== '') {
          value = Number(value);
          ageValid = typeof value === 'number' && value >= 18 && value <= 70;
          ageError = ageValid ? '' : 'Age error. Number from 18 to 70';
        }
        if (value === '') {
          ageValid = true;
          ageError = '';
        }
        break;
      default:
        break;
    }
    this.setState(
      {
        expYearsValid: expYearsValid,
        ageValid: ageValid,
        formErrors: {
          ...formErrors,
          expError: expError,
          ageError: ageError
        }
      },
      () => {
        const { expYearsValid, ageValid } = this.state;

        this.setState({
          formValid: expYearsValid && ageValid
        });
      }
    );
  };

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value
      },
      () => this.validateField(name, value)
    );
  };
  submitHandler = e => {
    const { search, competence, expYears, age } = this.state;
    this.requestHandler(search, competence, expYears, age);
    e.preventDefault();
  };
  sortSubmitHandler = e => {
    const { skill } = this.state;
    this.sortBy(skill);
    e.preventDefault();
  };

  render() {
    return (
      <SearchEngine
        {...this.state}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        sortSubmitHandler={this.sortSubmitHandler}
      />
    );
  }
}

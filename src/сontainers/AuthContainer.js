import React, { Component } from 'react';
import Auth from '../components/pages/LogAndReg/Auth/Auth';

export default class AuthContainer extends Component {
  state = {
    userIsNotCreated: '',
    name: '',
    password: '',
    formValid: false,
    nameValid: false,
    passwordValid: false,
    formErrors: {
      nameError: '',
      passwordError: ''
    }
  };

  validateField = (fieldName, value) => {
    let {
      formErrors,
      nameValid,
      passwordValid,
      formErrors: { nameError, passwordError }
    } = this.state;
    switch (fieldName) {
      case 'name':
        nameValid = value.match(/^[\wа-яА-ЯЁё]+?\s[\wа-яА-ЯЁё]+$/i)
          ? true
          : false;
        nameError = nameValid
          ? ''
          : "Name error. The name must contain 'Name Surname' with one space between. Example: 1) Ivan Ivanov 2) petr petrov98";
        break;
      case 'password':
        passwordValid =
          value.match(/^[\wа-яА-ЯЁё0-9]+$/i) && value.length > 5 ? true : false;
        passwordError = passwordValid
          ? ''
          : 'Password error. The password must cantain 6 or more letters/numbers without spaces';
        break;
      default:
        break;
    }

    this.setState(
      {
        nameValid: nameValid,
        passwordValid: passwordValid,
        formErrors: {
          ...formErrors,
          nameError: nameError,
          passwordError: passwordError
        }
      },
      this.validateForm
    );
  };
  validateForm = () => {
    const { nameValid, passwordValid } = this.state;
    this.setState({
      formValid: nameValid && passwordValid
    });
  };
  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ userIsNotCreated: '', [name]: value }, () =>
      this.validateField(name, value)
    );
  };
  submitHandler = e => {
    const { name, password } = this.state;
    this.logIn({ name, password });
    this.setState({ name: '', password: '' });
    e.preventDefault();
  };

  logIn = person => {
    const { staff, authCoder, authManager } = this.props;

    // Checking managers
    let user = staff.managers.find(human => {
      if (human.name === person.name && human.password === person.password) {
        return true;
      }
      return false;
    });
    // Checking coders
    if (!user) {
      user = staff.coders.find(human => {
        if (human.name === person.name && human.password === person.password) {
          return true;
        }
        return false;
      });
    }
    // Checking if nobody was registered
    if (!user) {
      this.setState({
        userIsNotCreated: 'User is not created',
        formValid: false
      });
      return;
    }

    if (user.category === 'coder') {
      if (user.fullyRegistered) {
        authCoder(user);
      }
      if (!user.fullyRegistered) {
        const emptyUser = {
          ...user,
          sex: 'select',
          position: 'select',
          experienceYears: '',
          experienceMonths: 'select',
          salary: '',
          prevExperience: '',
          age: '',
          skills: {
            JS: '0',
            IDE: '0',
            bundlers: '0',
            HtmlCss: '0',
            preprocessors: '0',
            HtmlCssLibs: '0',
            JSlibs: '0'
          }
        };
        authCoder(emptyUser);
      }
    }

    if (user.category === 'manager') {
      authManager(user);
    }
  };
  render() {
    const {
      userIsNotCreated,
      name,
      password,
      formValid,
      formErrors,
      formErrors: { nameError, passwordError }
    } = this.state;

    return (
      <Auth
        userIsNotCreated={userIsNotCreated}
        name={name}
        password={password}
        formErrors={formErrors}
        nameError={nameError}
        passwordError={passwordError}
        formValid={formValid}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

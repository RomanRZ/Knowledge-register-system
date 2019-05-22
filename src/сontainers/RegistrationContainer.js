import React, { Component } from 'react';
import Registration from '../components/pages/LogAndReg/Registration/Registration';

export default class RegistrationContainer extends Component {
  state = {
    name: '',
    password: '',
    category: 'select',
    formValid: false,
    nameValid: false,
    passwordValid: false,
    categoryValid: false,
    formErrors: {
      nameError: '',
      passwordError: '',
      categoryError: ''
    }
  };

  clearValues = () => {
    this.setState({
      name: '',
      password: '',
      category: 'select',
      categoryValid: false,
      nameValid: false,
      passwordValid: false,
      formValid: false
    });
  };

  сhangeHandler = e => {
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
    const { addPerson } = this.props;
    const { name, password, category } = this.state;
    category === 'coder'
      ? addPerson(
          {
            name,
            password,
            category,
            id: new Date().getTime(),
            fullyRegistered: false
          },
          this.clearValues
        )
      : addPerson(
          {
            name,
            password,
            category,
            id: new Date().getTime()
          },
          this.clearValues
        );
    e.preventDefault();
  };
  // Registration form validation
  validateField = (fieldName, value) => {
    let {
      categoryValid,
      nameValid,
      passwordValid,
      formErrors,
      formErrors: { categoryError, nameError, passwordError }
    } = this.state;

    switch (fieldName) {
      case 'category':
        categoryValid = value !== 'select';
        categoryError = categoryValid
          ? ''
          : 'Category error. Please, choose category';
        break;
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
        categoryValid: categoryValid,
        nameValid: nameValid,
        passwordValid: passwordValid,
        formErrors: {
          ...formErrors,
          categoryError: categoryError,
          nameError: nameError,
          passwordError: passwordError
        }
      },
      this.validateForm
    );
  };
  validateForm = () => {
    const { categoryValid, nameValid, passwordValid } = this.state;
    this.setState({
      formValid: categoryValid && nameValid && passwordValid
    });
  };

  render() {
    const { alreadyRegistered } = this.props;
    return (
      <Registration
        {...this.state}
        alreadyRegistered={alreadyRegistered}
        submitHandler={this.submitHandler}
        сhangeHandler={this.сhangeHandler}
      />
    );
  }
}

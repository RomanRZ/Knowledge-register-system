import React, { Component } from 'react';
import Reports from '../components/pages/ManagersBlock/Reports/Reports';

export default class ReportsContainer extends Component {
  state = { numberOfPeople: false, sex: false, age: false, salary: false };
  submitHandler = e => {
    e.preventDefault();
  };
  changeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState(prevState => {
      return {
        [name]: !prevState[name]
      };
    });
  };
  render() {
    return (
      <Reports
        {...this.state}
        state={this.props.state}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

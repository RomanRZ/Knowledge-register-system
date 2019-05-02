import React, { Component } from 'react';

export default class Registration extends Component {
  state = { nameValue: '', passValue: '', category: 'managers' };
  onChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };
  submitHandler = e => {
    const { addPerson } = this.props;
    const { nameValue, passValue, category } = this.state;
    addPerson({ nameValue, passValue, category });
    e.preventDefault();
  };
  render() {
    const { nameValue, passValue, category } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <h3>Registration</h3>
        <select
          name='category'
          value={category}
          onChange={this.onChangeHandler}
        >
          <option value='managers'>Manager</option>
          <option value='coders'>Programmer</option>
        </select>
        <input
          type='text'
          name='nameValue'
          value={nameValue}
          onChange={this.onChangeHandler}
          placeholder='Enter Name'
        />
        <input
          type='password'
          name='passValue'
          value={passValue}
          onChange={this.onChangeHandler}
          placeholder='Enter password'
        />
        <input type='submit' value='register' />
      </form>
    );
  }
}

import React, { Component } from 'react';

export default class Log extends Component {
  state = { name: '', pass: '' };
  onChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  };
  submitHandler = e => {
    const {
      state: { status, coderIsLogged, managerIsLogged },
      logIn
    } = this.props;
    console.log(status);
    console.log(coderIsLogged, managerIsLogged);
    // logIn();
    e.preventDefault();
  };
  render() {
    const { name, pass, status } = this.state;
    return (
      <div>
        <h3>login/out</h3>
        <form onSubmit={this.submitHandler}>
          <input
            name='name'
            type='text'
            value={name}
            onChange={this.onChangeHandler}
          />
          <input
            name='pass'
            type='password'
            value={pass}
            onChange={this.onChangeHandler}
          />
          <input type='submit' value='Log IN' />
        </form>
        <p>{status}</p>
      </div>
    );
  }
}

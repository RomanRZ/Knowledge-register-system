import React, { Component } from 'react';

export default class Log extends Component {
  state = { name: '', password: '' };
  onChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  };
  submitHandler = e => {
    const { name, password } = this.state;
    const { logIn } = this.props;
    logIn({ name, password });
    this.setState({ name: '', password: '' });
    e.preventDefault();
  };
  render() {
    const { name, password, status } = this.state;
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
            name='password'
            type='password'
            value={password}
            onChange={this.onChangeHandler}
          />
          <input type='submit' value='Log IN' />
        </form>
        <p>{status}</p>
      </div>
    );
  }
}

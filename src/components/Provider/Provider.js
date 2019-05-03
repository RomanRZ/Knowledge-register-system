import React, { Component } from 'react';
export const Context = React.createContext();

export default class Provider extends Component {
  state = {
    staff: null,
    status: 'guest',
    coderIsLogged: false,
    managerIsLogged: false
  };

  logIn = person => {
    const { staff, status, coderIsLogged, managerIsLogged } = this.state;
    console.log(staff, status, coderIsLogged, managerIsLogged);
    console.log('login');
  };
  addPerson = person => {
    const { staff } = this.state; // {managers: [], coders: []}

    // person.category === 'managers' || 'coders';
    // let newStaff = [...staff[person.category], person];
    // this.setState({ staff: { [person.category]: newStaff } });
    if (person.category === 'managers') {
      this.setState({
        staff: { ...staff, managers: [...staff.managers, person] }
      });
    } else {
      this.setState({ staff: { ...staff, coders: [...staff.coders, person] } });
    }
  };

  componentDidMount() {
    if (!this.state.staff) {
      this.setState({ staff: this.props.data });
    }
  }
  render() {
    console.log(this.state);
    return (
      <Context.Provider
        value={{
          state: this.state,
          logIn: this.logIn,
          addPerson: this.addPerson
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

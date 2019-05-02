import React, { Component } from 'react';
export const Context = React.createContext();

export default class Provider extends Component {
  state = { staff: null, managerIsLogged: false, coderIsLogged: false };
  // handleLogin = person => {
  //   let managerIn = null;
  //   let coderIn = null;
  //   if (person === 'manager') {
  //     managerIn = true;
  //     coderIn = false;
  //   }
  //   if (person === 'coder') {
  //     coderIn = true;
  //     managerIn = false;
  //   }
  //   this.setState({
  //     managerIsLogged: managerIn,
  //     coderIsLogged: coderIn
  //   });
  // };
  addPerson = person => {
    console.log(person);
    const { staff } = this.state; // {managers: [], coders: []}
    // person.category === 'managers' || 'coders'
    // let newStaff = [[...staff[person.category], person]];
    // this.setState({ [staff[person.category]]: newStaff });
    if (person.category === 'managers') {
      this.setState({ [staff.managers]: [...staff.managers, person] });
    } else {
      this.setState({ [staff.coders]: [...staff.coders, person] });
    }
  };

  componentDidMount() {
    if (!this.state.staff) {
      this.setState({ staff: this.props.data });
    }
  }
  render() {
    return (
      <Context.Provider
        value={{ state: this.state, addPerson: this.addPerson }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

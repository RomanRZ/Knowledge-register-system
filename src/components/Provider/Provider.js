import React, { Component } from 'react';
export const Context = React.createContext();

export default class Provider extends Component {
  state = {
    staff: null,
    status: 'guest',
    coderIsLogged: false,
    managerIsLogged: true,
    requestedCoders: []
  };

  logIn = person => {
    const { staff } = this.state;

    // Check managers
    let fullPerson = staff.managers.find(human => {
      if (human.name === person.name && human.password === person.password) {
        return true;
      }
      return false;
    });
    // Check coders
    if (!fullPerson) {
      fullPerson = staff.coders.find(human => {
        if (human.name === person.name && human.password === person.password) {
          return true;
        }
        return false;
      });
    }

    if (fullPerson.category === 'coder') {
      this.setState(({ coderIsLogged }) => {
        return {
          status: fullPerson.category,
          coderIsLogged: !coderIsLogged
        };
      });
    }

    if (fullPerson.category === 'manager') {
      this.setState(({ managerIsLogged }) => {
        return {
          status: fullPerson.category,
          managerIsLogged: !managerIsLogged
        };
      });
    }
  };

  logOut = () => {
    const { managerIsLogged } = this.state;
    managerIsLogged
      ? this.setState({ managerIsLogged: false })
      : this.setState({ coderIsLogged: false });
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

  requestHandler = (competence, expYears, age) => {
    const {
      staff: { coders }
    } = this.state;
    const requiredCoders = coders.filter(person => {
      console.log('expYears', expYears);
      if (expYears !== '' && person.experienceYears < expYears) {
        return false;
      }
      console.log('person age', person.age);
      console.log('age', age);
      if (age !== '' && person.age > age) {
        return false;
      }
      if (competence === 'all') {
        return true;
      }
      if (person.competence === competence) {
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
  componentDidMount() {
    if (!this.state.staff) {
      this.setState({ staff: this.props.data });
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          addPerson: this.addPerson,
          requestHandler: this.requestHandler,
          sortBy: this.sortBy
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

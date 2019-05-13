import React, { Component } from 'react';
export const Context = React.createContext();

export default class Provider extends Component {
  state = {
    auth: { name: '', password: '' },
    userIsNotCreated: '',
    registration: { name: '', password: '', category: 'select' },
    staff: null,
    authStatus: 'guest',
    coderIsLogged: true,
    managerIsLogged: false,
    codersBlock: {
      currentCodersName: '',
      currentCodersPassword: '',
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
    },
    reports: {
      numberOfPeople: false,
      sex: false,
      age: false,
      salary: false
    },
    searchEngine: {
      search: '',
      competence: 'all',
      expYears: '',
      age: '',
      skill: 'JS'
    },

    requestedCoders: [],
    validation: {
      registration: {
        formValid: false,
        categoryValid: false,
        nameValid: false,
        passwordValid: false,
        formErrors: {
          categoryErrorMessage: '',
          nameErrorMessage: '',
          passwordErrorMessage: ''
        }
      },
      authorization: {
        formValid: false,
        nameValid: false,
        passwordValid: false,
        formErrors: {
          nameErrorMessage: '',
          passwordErrorMessage: ''
        }
      }
    }
  };

  // Authorization
  // Validation in the authorization
  authValidateField = (fieldName, value) => {
    let {
      validation,
      validation: {
        authorization,
        authorization: {
          formErrors,
          nameValid,
          passwordValid,
          formErrors: { nameErrorMessage, passwordErrorMessage }
        }
      }
    } = this.state;
    switch (fieldName) {
      case 'name':
        nameValid = value.match(/^[\wа-яА-ЯЁё]+?\s[\wа-яА-ЯЁё]+$/i)
          ? true
          : false;
        nameErrorMessage = nameValid
          ? ''
          : "Name error. The name must contain 'Name Surname' with one space between. Example: 1) Ivan Ivanov 2) petr petrov98";
        break;
      case 'password':
        passwordValid =
          value.match(/^[\wа-яА-ЯЁё0-9]+$/i) && value.length > 5 ? true : false;
        passwordErrorMessage = passwordValid
          ? ''
          : 'Password error. The password must cantain 6 or more letters/numbers without spaces';
        break;
      default:
        break;
    }

    this.setState(
      {
        validation: {
          ...validation,
          authorization: {
            ...authorization,
            nameValid: nameValid,
            passwordValid: passwordValid,
            formErrors: {
              ...formErrors,
              nameErrorMessage: nameErrorMessage,
              passwordErrorMessage: passwordErrorMessage
            }
          }
        }
      },
      () => this.authValidateForm()
    );
  };
  authValidateForm = () => {
    const {
      validation,
      validation: {
        authorization,
        authorization: { nameValid, passwordValid }
      }
    } = this.state;
    this.setState({
      validation: {
        ...validation,
        authorization: {
          ...authorization,
          formValid: nameValid && passwordValid
        }
      }
    });
  };
  authChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      { userIsNotCreated: '', auth: { ...this.state.auth, [name]: value } },
      () => this.authValidateField(name, value)
    );
  };
  authSubmitHandler = e => {
    const { name, password } = this.state.auth;
    this.logIn({ name, password });
    this.setState({ auth: { name: '', password: '' } });
    e.preventDefault();
  };

  logIn = person => {
    const { staff } = this.state;

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
      this.setState({ userIsNotCreated: 'User is not created' });
      return;
    }

    if (user.category === 'coder') {
      this.setState(({ coderIsLogged, codersBlock }) => {
        return {
          authStatus: user.category,
          coderIsLogged: !coderIsLogged,
          codersBlock: {
            ...codersBlock,
            currentCodersName: user.name,
            currentCodersPassword: user.password,
            sex: user.sex,
            position: user.position,
            experienceYears: user.experienceYears,
            experienceMonths: user.experienceMonths,
            salary: user.salary,
            prevExperience: user.prevExperience,
            age: user.age,
            skills: {
              ...user.skills
            }
          }
        };
      });
    }

    if (user.category === 'manager') {
      this.setState(({ managerIsLogged }) => {
        return {
          authStatus: user.category,
          managerIsLogged: !managerIsLogged
        };
      });
    }
  };

  logOut = () => {
    const { managerIsLogged, codersBlock } = this.state;
    managerIsLogged
      ? this.setState({ managerIsLogged: false })
      : this.setState({
          coderIsLogged: false,
          codersBlock: {
            ...codersBlock,
            currentCodersName: '',
            currentCodersPassword: '',
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
          }
        });
  };

  // Registration
  regChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        registration: { ...this.state.registration, [name]: value }
      },
      () => this.regValidateField(name, value)
    );
  };
  regSubmitHandler = e => {
    const {
      registration: { name, password, category }
    } = this.state;
    category === 'coder'
      ? this.addPerson({
          name,
          password,
          category,
          id: new Date().getTime(),
          fullyRegistered: false
        })
      : this.addPerson({
          name,
          password,
          category,
          id: new Date().getTime()
        });
    e.preventDefault();
  };
  // Registration form validation
  regValidateField = (fieldName, value) => {
    let {
      validation,
      validation: {
        registration,
        registration: {
          categoryValid,
          nameValid,
          passwordValid,
          formErrors,
          formErrors: {
            categoryErrorMessage,
            nameErrorMessage,
            passwordErrorMessage
          }
        }
      }
    } = this.state;

    switch (fieldName) {
      case 'category':
        categoryValid = value !== 'select';
        categoryErrorMessage = categoryValid
          ? ''
          : 'Category error. Please, choose category';
        break;
      case 'name':
        nameValid = value.match(/^[\wа-яА-ЯЁё]+?\s[\wа-яА-ЯЁё]+$/i)
          ? true
          : false;
        nameErrorMessage = nameValid
          ? ''
          : "Name error. The name must contain 'Name Surname' with one space between. Example: 1) Ivan Ivanov 2) petr petrov98";
        break;
      case 'password':
        passwordValid =
          value.match(/^[\wа-яА-ЯЁё0-9]+$/i) && value.length > 5 ? true : false;
        passwordErrorMessage = passwordValid
          ? ''
          : 'Password error. The password must cantain 6 or more letters/numbers without spaces';
        break;
      default:
        break;
    }
    this.setState(
      {
        validation: {
          ...validation,
          registration: {
            ...registration,
            categoryValid: categoryValid,
            nameValid: nameValid,
            passwordValid: passwordValid,
            formErrors: {
              ...formErrors,
              categoryErrorMessage: categoryErrorMessage,
              nameErrorMessage: nameErrorMessage,
              passwordErrorMessage: passwordErrorMessage
            }
          }
        }
      },
      this.regValidateForm
    );
  };
  regValidateForm = () => {
    const {
      validation,
      validation: {
        registration,
        registration: { categoryValid, nameValid, passwordValid }
      }
    } = this.state;
    this.setState({
      validation: {
        ...validation,
        registration: {
          ...registration,
          formValid: categoryValid && nameValid && passwordValid
        }
      }
    });
  };

  addPerson = newPerson => {
    const {
      staff,
      validation,
      validation: { registration }
    } = this.state; // {managers: [], coders: []}
    // here finding alredy registereds
    if (newPerson.category === 'manager') {
      const alreadyRegistered = staff.managers
        .reduce((arrOfNames, manager) => {
          return [...arrOfNames, manager.name];
        }, [])
        .includes(newPerson.name);
      if (alreadyRegistered) {
        console.log(newPerson.name, 'already registered');
        return;
      }
      this.setState(
        {
          staff: { ...staff, managers: [...staff.managers, newPerson] }
        },
        () => {
          this.setState({
            registration: {
              name: '',
              password: '',
              category: 'select'
            },
            validation: {
              ...validation,
              registration: {
                ...registration,
                categoryValid: false,
                nameValid: false,
                passwordValid: false,
                formValid: false
              }
            }
          });
        }
      );
    }
    if (newPerson.category === 'coder') {
      const alreadyRegistered = staff.coders
        .reduce((arrOfNames, manager) => {
          return [...arrOfNames, manager.name];
        }, [])
        .includes(newPerson.name);
      if (alreadyRegistered) {
        console.log(newPerson.name, 'already registered');
        return;
      }
      this.setState(
        {
          staff: { ...staff, coders: [...staff.coders, newPerson] }
        },
        () => {
          this.setState({
            registration: {
              name: '',
              password: '',
              category: 'select'
            },
            validation: {
              ...validation,
              registration: {
                ...registration,
                categoryValid: false,
                nameValid: false,
                passwordValid: false,
                formValid: false
              }
            }
          });
        }
      );
    }
  };
  // Search Engine =============================
  requestHandler = (search, competence, expYears, age) => {
    const {
      staff: { coders }
    } = this.state;
    const requiredCoders = coders
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
      .filter(person => {
        if (competence === 'all') {
          return true;
        }
        if (person.competence === competence) {
          return true;
        }
        return false;
      })
      .filter(person => {
        if (expYears !== '') {
          if (person.experienceYears < expYears) {
            return false;
          }
        }
        return true;
      })
      .filter(person => {
        if (age !== '') {
          if (person.age > age) {
            return false;
          }
        }
        return true;
      })
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
  searchChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      searchEngine: { ...this.state.searchEngine, [name]: target.value }
    });
  };
  searchSubmitHandler = e => {
    const { search, competence, expYears, age } = this.state.searchEngine;
    this.requestHandler(search, competence, expYears, age);
    e.preventDefault();
  };
  searchSortSubmitHandler = e => {
    const { skill } = this.state.searchEngine;
    this.sortBy(skill);
    e.preventDefault();
  };

  //  FOR coders block
  codersChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    const { codersBlock } = this.state;
    this.setState({ codersBlock: { ...codersBlock, [name]: target.value } });

    // Changing selects of skills
    if (
      name === 'JS' ||
      name === 'IDE' ||
      name === 'bundlers' ||
      name === 'HtmlCss' ||
      name === 'preprocessors' ||
      name === 'HtmlCssLibs' ||
      name === 'JSlibs'
    ) {
      this.setState({
        codersBlock: {
          ...codersBlock,
          skills: { ...codersBlock.skills, [name]: target.value }
        }
      });
    }
  };
  // When coder is registered but has empty profile
  addCoderIntoDataBase = e => {
    const {
      staff,
      staff: { coders },
      codersBlock: {
        currentCodersName,
        currentCodersPassword,
        sex,
        position,
        experienceYears,
        experienceMonths,
        salary,
        prevExperience,
        age,
        skills,
        skills: {
          JS,
          IDE,
          bundlers,
          HtmlCss,
          preprocessors,
          HtmlCssLibs,
          JSlibs
        }
      }
    } = this.state;
    const registeredCoder = coders.find(
      coder => coder.name === currentCodersName
    );

    const fullRegisteredCoder = {
      ...registeredCoder,
      fullyRegistered: true,
      name: currentCodersName,
      password: currentCodersPassword,
      sex,
      position,
      competence: position.split(' ')[0].toLowerCase(),
      experienceYears,
      experienceMonths,
      salary,
      prevExperience,
      age,
      skills: {
        ...skills,
        JS,
        IDE,
        bundlers,
        HtmlCss,
        preprocessors,
        HtmlCssLibs,
        JSlibs
      }
    };

    const refreshedCoders = coders.filter(coder =>
      coder.id === registeredCoder.id ? false : true
    );

    this.setState({
      staff: {
        ...staff,
        coders: [...refreshedCoders, fullRegisteredCoder]
      }
    });
    e.preventDefault();
  };

  // Reports
  reportsSubmitHandler = e => {
    e.preventDefault();
  };
  reportsChangeHandler = e => {
    const target = e.target;
    const name = target.name;
    this.setState(prevState => {
      return {
        reports: { ...prevState.reports, [name]: !prevState.reports[name] }
      };
    });
  };
  // ===================

  componentDidMount() {
    if (!this.state.staff) {
      this.setState({ staff: this.props.data });
    }
  }
  // =========================================
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          logOut: this.logOut,
          changeHandler: this.codersChangeHandler,
          addCoderIntoDataBase: this.addCoderIntoDataBase,
          authChangeHandler: this.authChangeHandler,
          authSubmitHandler: this.authSubmitHandler,
          regChangeHandler: this.regChangeHandler,
          regSubmitHandler: this.regSubmitHandler,
          reportsSubmitHandler: this.reportsSubmitHandler,
          reportsChangeHandler: this.reportsChangeHandler,
          searchChangeHandler: this.searchChangeHandler,
          searchSubmitHandler: this.searchSubmitHandler,
          searchSortSubmitHandler: this.searchSortSubmitHandler
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

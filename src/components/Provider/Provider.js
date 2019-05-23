import React, { Component } from 'react';
export const Context = React.createContext();

export default class Provider extends Component {
  state = {
    alreadyRegistered: '',
    staff: null,
    authStatus: 'guest',
    coderIsLogged: true,
    managerIsLogged: false,
    menuIsShown: false,
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
    validation: {
      codersBlock: {
        formValid: false,
        sexValid: false,
        positionValid: false,
        expYearsValid: false,
        expMonthsValid: false,
        salaryValid: false,
        ageValid: false,
        skills: {
          jsValid: false,
          ideValid: false,
          bundlersValid: false,
          htmlCssValid: false,
          preprocessorsValid: false,
          htmlCssLibsValid: false,
          jsLibsValid: false
        },
        formErrors: {
          sexError: '',
          positionError: '',
          expYearsError: '',
          expMonthsError: '',
          salaryError: '',
          ageError: '',
          jsError: '',
          ideError: '',
          bundlersError: '',
          htmlCssError: '',
          preprocessorsError: '',
          htmlCssLibsError: '',
          jsLibsError: ''
        }
      }
    }
  };
  // Header
  toggleMenu = () => {
    this.setState(({ menuIsShown }) => {
      return {
        menuIsShown: !menuIsShown
      };
    });
  };

  // Authorization
  authCoder = user => {
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
  };

  authManager = user => {
    this.setState(({ managerIsLogged }) => {
      return {
        authStatus: user.category,
        managerIsLogged: !managerIsLogged
      };
    });
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
  addPerson = (newPerson, cleaningCallback) => {
    const { staff } = this.state; // {managers: [], coders: []}
    // here finding alredy registereds
    if (newPerson.category === 'manager') {
      const alreadyRegistered = staff.managers
        .reduce((arrOfNames, manager) => {
          return [...arrOfNames, manager.name];
        }, [])
        .includes(newPerson.name);
      if (alreadyRegistered) {
        this.setState({
          alreadyRegistered: `${newPerson.name} has already been registered`
        });
        return;
      }
      this.setState(
        {
          staff: { ...staff, managers: [...staff.managers, newPerson] }
        },
        () => {
          this.setState({
            alreadyRegistered: ''
          });
          cleaningCallback();
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
        this.setState({
          alreadyRegistered: `${newPerson.name} has already been registered`
        });
        return;
      }
      this.setState(
        {
          staff: { ...staff, coders: [...staff.coders, newPerson] }
        },
        () => {
          this.setState({
            alreadyRegistered: ''
          });
          cleaningCallback();
        }
      );
    }
  };

  //  FOR coders block
  codersChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    const { codersBlock } = this.state;
    this.setState({ codersBlock: { ...codersBlock, [name]: value } }, () =>
      this.coderValidateField(name, value)
    );

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
          skills: { ...codersBlock.skills, [name]: value }
        }
      });
    }
  };
  // When coder is registered but has empty profile
  // Validation Adding coder
  coderValidateField = (fieldName, value) => {
    let {
      validation,
      validation: {
        codersBlock,
        codersBlock: {
          sexValid,
          positionValid,
          expYearsValid,
          expMonthsValid,
          salaryValid,
          ageValid,
          skills,
          skills: {
            jsValid,
            ideValid,
            bundlersValid,
            htmlCssValid,
            preprocessorsValid,
            htmlCssLibsValid,
            jsLibsValid
          },
          formErrors,
          formErrors: {
            sexError,
            positionError,
            expYearsError,
            expMonthsError,
            salaryError,
            ageError,
            jsError,
            ideError,
            bundlersError,
            htmlCssError,
            preprocessorsError,
            htmlCssLibsError,
            jsLibsError
          }
        }
      }
    } = this.state;
    switch (fieldName) {
      case 'sex':
        sexValid = value !== 'select';
        sexError = sexValid ? '' : 'Sex field error. Please, choose sex';
        break;
      case 'position':
        positionValid = value !== 'select';
        positionError = positionValid
          ? ''
          : 'Position field error. Please, choose position';
        break;
      case 'experienceYears':
        expYearsValid = value.match(/^[1-9]?[0-9]?$/) ? true : false;
        expYearsError = expYearsValid
          ? ''
          : 'Experience in years field error. Only 2 numbers';
        break;
      case 'experienceMonths':
        expMonthsValid = value !== 'select';
        expMonthsError = expMonthsValid
          ? ''
          : 'Experiense in months field error. Please, choose Experiense in months';
        break;
      case 'salary':
        salaryValid = value.match(/^\d+?$/) ? true : false;
        salaryError = salaryValid ? '' : 'Salary error. Only numbers';
        break;
      case 'age':
        ageValid = value.match(/^([1-9][0-9])?$/) ? true : false;
        ageError = ageValid ? '' : 'Age error. Only 2 numbers';
        break;
      default:
        break;
    }

    this.setState(
      {
        validation: {
          ...validation,
          codersBlock: {
            ...codersBlock,
            sexValid: sexValid,
            positionValid: positionValid,
            expYearsValid: expYearsValid,
            expMonthsValid: expMonthsValid,
            salaryValid: salaryValid,
            ageValid: ageValid,
            skills: {
              ...skills,
              jsValid: jsValid,
              ideValid: ideValid,
              bundlersValid: bundlersValid,
              htmlCssValid: htmlCssValid,
              preprocessorsValid: preprocessorsValid,
              htmlCssLibsValid: htmlCssLibsValid,
              jsLibsValid: jsLibsValid
            },

            formErrors: {
              ...formErrors,
              sexError: sexError,
              positionError: positionError,
              expYearsError: expYearsError,
              expMonthsError: expMonthsError,
              salaryError: salaryError,
              ageError: ageError,
              jsError: jsError,
              ideError: ideError,
              bundlersError: bundlersError,
              htmlCssError: htmlCssError,
              preprocessorsError: preprocessorsError,
              htmlCssLibsError: htmlCssLibsError,
              jsLibsError: jsLibsError
            }
          }
        }
      },
      () => this.coderValidateForm()
    );
  };

  coderValidateForm = () => {
    const {
      validation,
      validation: {
        codersBlock,
        codersBlock: {
          sexValid,
          positionValid,
          expYearsValid,
          expMonthsValid,
          salaryValid,
          ageValid
        }
      }
    } = this.state;
    this.setState({
      validation: {
        ...validation,
        codersBlock: {
          ...codersBlock,
          formValid:
            sexValid &&
            positionValid &&
            expYearsValid &&
            expMonthsValid &&
            salaryValid &&
            ageValid
        }
      }
    });
  };
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
          codersChangeHandler: this.codersChangeHandler,
          addCoderIntoDataBase: this.addCoderIntoDataBase,
          authCoder: this.authCoder,
          authManager: this.authManager,
          addPerson: this.addPerson,
          reportsSubmitHandler: this.reportsSubmitHandler,
          reportsChangeHandler: this.reportsChangeHandler,
          searchChangeHandler: this.searchChangeHandler,
          searchSubmitHandler: this.searchSubmitHandler,
          searchSortSubmitHandler: this.searchSortSubmitHandler,
          toggleMenu: this.toggleMenu
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

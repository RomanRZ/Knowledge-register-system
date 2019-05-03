import React, { Fragment } from 'react';
import ManagersBlock from '../ManagersBlock/ManagersBlock';
import CodersBlock from '../CodersBlock/CodersBlock';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
import LogAndReg from '../LogAndReg/LogAndReg';
import NotFound from '../NotFound/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../Provider/Provider';

const Main = () => {
  return (
    <Fragment>
      <h1>Main block</h1>
      <Context.Consumer>
        {value => {
          const {
            state,
            managerIsLogged,
            coderIsLogged,
            addPerson,
            logIn
          } = value;
          return (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/gallery' component={Gallery} />
              <Route
                path='/managers-block'
                render={() => {
                  if (!managerIsLogged) {
                    return <Redirect to='/logAndReg' />;
                  } else {
                    return <ManagersBlock />;
                  }
                }}
              />
              <Route
                path='/coders-block'
                render={() => {
                  if (!coderIsLogged) {
                    return <Redirect to='/logAndReg' />;
                  } else {
                    return <CodersBlock />;
                  }
                }}
              />
              <Route path='/contacts' component={Contacts} />
              <Route
                path='/logAndReg'
                render={props => (
                  <LogAndReg
                    state={state}
                    logIn={logIn}
                    addPerson={addPerson}
                    {...props}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          );
        }}
      </Context.Consumer>
    </Fragment>
  );
};

export default Main;

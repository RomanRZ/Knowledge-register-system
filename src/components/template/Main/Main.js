import React, { Fragment } from 'react';
import ManagersBlock from '../../pages/ManagersBlock/ManagersBlock';
import CodersBlock from '../../pages/CodersBlock/CodersBlock';
import Home from '../../pages/Home/Home';
import Gallery from '../../pages/Gallery/Gallery';
import Contacts from '../../pages/Contacts/Contacts';
import LogAndReg from '../../pages/LogAndReg/LogAndReg';
import NotFound from '../../pages/NotFound/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../../Provider/Provider';

const Main = () => {
  return (
    <Fragment>
      <h1>Main block</h1>
      <Context.Consumer>
        {({ state, addPerson, logIn, requestHandler, sortBy }) => {
          const { managerIsLogged, coderIsLogged } = state;
          return (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/gallery' component={Gallery} />
              <Route
                path='/managers-block'
                render={props => {
                  if (!managerIsLogged) {
                    return <Redirect to='/logAndReg' />;
                  } else {
                    return (
                      <ManagersBlock
                        {...props}
                        state={state}
                        requestHandler={requestHandler}
                        sortBy={sortBy}
                      />
                    );
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

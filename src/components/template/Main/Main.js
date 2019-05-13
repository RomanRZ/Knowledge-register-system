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
        {({ state }) => {
          const { managerIsLogged, coderIsLogged } = state;
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
              <Route path='/logAndReg' component={LogAndReg} />
              <Route component={NotFound} />
            </Switch>
          );
        }}
      </Context.Consumer>
    </Fragment>
  );
};

export default Main;

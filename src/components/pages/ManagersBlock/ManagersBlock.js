import React from 'react';
import ReportsContainer from '../../../сontainers/ReportsContainer';
import SearchEngineContainer from '../../../сontainers/SearchEngineContainer';
import { Context } from '../../Provider/Provider';
import { Route, Switch, NavLink } from 'react-router-dom';
import './ManagersBlock.scss';

const ManagersBlock = () => {
  return (
    <Context.Consumer>
      {({ state }) => {
        return (
          <article className='managers-block'>
            <h2 className='managers-block__title'>Manager's block</h2>
            <div className='managers-block__links'>
              <NavLink
                className='managers-block__link'
                activeClassName='managers-block__active-route'
                to='/managers-block/reports'
              >
                Reports
              </NavLink>
              <NavLink
                className='managers-block__link'
                activeClassName='managers-block__active-route'
                to='/managers-block/search-engine'
              >
                Search Engine
              </NavLink>
            </div>
            <div className='managers-block__container'>
              <Switch>
                <Route
                  path='/managers-block/reports'
                  render={() => <ReportsContainer state={state} />}
                />
                <Route
                  path='/managers-block/search-engine'
                  render={() => <SearchEngineContainer state={state} />}
                />
              </Switch>
            </div>
          </article>
        );
      }}
    </Context.Consumer>
  );
};

export default ManagersBlock;

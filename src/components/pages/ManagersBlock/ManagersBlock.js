import React from 'react';
import SearchEngine from './SearchEngine/SearchEngine';
import Reports from './Reports/Reports';
import { Route, Switch, NavLink } from 'react-router-dom';
import './ManagersBlock.scss';

const ManagersBlock = () => {
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
          <Route path='/managers-block/reports' component={Reports} />
          <Route
            path='/managers-block/search-engine'
            component={SearchEngine}
          />
        </Switch>
      </div>
    </article>
  );
};

export default ManagersBlock;

import React from 'react';
import SearchEngine from './SearchEngine/SearchEngine';
import Reports from './Reports/Reports';
import { Route, Switch, Link } from 'react-router-dom';

const ManagersBlock = () => {
  return (
    <div>
      <h3>Manager's block</h3>

      <div>
        <Link to='/managers-block/reports'>Reports</Link>
        <Link to='/managers-block/search-engine'>Search Engine</Link>
        <Switch>
          <Route path='/managers-block/reports' component={Reports} />
          <Route
            path='/managers-block/search-engine'
            component={SearchEngine}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ManagersBlock;

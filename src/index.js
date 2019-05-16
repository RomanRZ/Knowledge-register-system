import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider/Provider';
import App from '../src/components/App/App';
import data from './data/data.json';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <Provider data={data}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);

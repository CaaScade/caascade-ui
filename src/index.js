import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route, Redirect, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './views/layout';
import Home from './components/home';
import LaunchPostgresql from './views/launch/postgresql';

import reducers from './reducers';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />

        <Route path='/launch-postgresql' component={LaunchPostgresql} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));

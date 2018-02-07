import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import Menu from './menu/menu_container';
import Home from './homepage/home_container'

const App = () => (
  <div id="app">
    <header className="app-header">
      <Route path="/" component={Menu} />
    </header>
    <Switch>
      <Route exact path="/" component={ Home } />

    </Switch>
  </div>
);

export default App;

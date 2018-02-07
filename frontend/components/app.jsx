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

// Components
import Menu from './menu/menu_container';
import Home from './home/home_container';
import Login from './login/login_container';

const App = () => (
  <div id="app">
    <header className="app-header">
      <Route path="/" component={Menu} />
    </header>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />

    </Switch>
  </div>
);

export default App;

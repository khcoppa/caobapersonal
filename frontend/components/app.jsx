import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// Component imports
import MenuContainer from './menu/menu_container';
import HomeContainer from './homepage/home_container'

const App = () => (
  <div id="app">
    <header className="app-header">
        <Route path="/" component={ MenuContainer } />
    </header>
    <Switch>
      <Route exact path="/" component={ MenuContainer } />

    </Switch>
  </div>
);

export default App;

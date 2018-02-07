import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu_public">
          <li><a href="/">Training</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Meet Master</a></li>
          <li><a href="/">Caoba</a></li>
        </ul>
        <ul className = "menu_protected">
          <li><a href="/">Join</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/">Book Session</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;

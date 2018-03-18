import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">

        <ul className="menu_public">
          <li><Link to={'/training'}>Training</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/staff'}>Mestre</Link></li>
          <li><Link to={'/caoba'}>Caoba</Link></li>
        </ul>

        <ul className = "menu_protected">
          <li><Link to={'/join'}>Join</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
          <li><Link to={'/book'}>Book Session</Link></li>
        </ul>
        
      </div>
    );
  }
}

export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu_public">
          <li>TRAINING</li>
          <li>ABOUT</li>
          <li>MEET MASTER</li>
          <li>CAOBA</li>
        </ul>
        <ul className = "menu_protected">
          <li>JOIN</li>
          <li>LOGIN</li>
          <li>BOOK SESSION</li>
        </ul>
      </div>
    );
  }
}

export default Menu;

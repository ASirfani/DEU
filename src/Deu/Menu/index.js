import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    
    <nav className="navigation">
      <div className="logo">
        <NavLink className='links' to="/" activeClassName="active">DEU</NavLink>
      </div>
      <div className="user-info">
        <NavLink className='link' to="/about" >About</NavLink>
        <NavLink className='link' to="/faq" >FAQ</NavLink>
        <NavLink className='link' to="/contact" >Contact</NavLink>

      </div>
    </nav>
  );
}

export default Menu;

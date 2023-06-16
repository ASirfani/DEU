import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <span style={{ color: '#fff' }}>©2023</span> <NavLink className='links' to="/" activeClassName="active">DEU.com</NavLink>
                <span className='author'>By "Abbas Ali Irfani"</span>
            </div>
            <div className="user-info">
            <span className='author-email'>email:"abbasaliirfani@gmail.com"</span>
                <NavLink className='link' to="/privacy" >Privacy</NavLink>
                <NavLink className='link' to="/contact" >Contact</NavLink>
            </div>
        </nav>
    );
}

export default Footer;
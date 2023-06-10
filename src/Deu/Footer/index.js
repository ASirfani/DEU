import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <span style={{ color: '#fff' }}>©2023</span> <NavLink className='links' to="/" activeClassName="active">DEU.com</NavLink>
            </div>
            <div className="user-info">
                <NavLink className='link' to="/terms" >Terms</NavLink>
                <NavLink className='link' to="/privacy" >Privacy</NavLink>

                <NavLink className='link' to="/contact" >Contact</NavLink>
            </div>
        </nav>
    );
}

export default Footer;
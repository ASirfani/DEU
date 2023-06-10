import React from 'react';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import './index.css'

const Deu = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className='container-nav'>
          <Menu />
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <div className='container-nav'>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Deu;
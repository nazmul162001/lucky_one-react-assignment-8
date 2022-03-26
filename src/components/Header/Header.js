import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav-content d-flex justify-content-between align-items-center'>
      <div className="logo fs-3 fw-bold text-light">Logo</div>
      <div className="nav-menu">
        <a className='text-decoration-none text-light' href="/Home">Home</a>
        <a className='text-decoration-none text-light' href="/Team">Our Team</a>
        <a className='text-decoration-none text-light' href="/Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
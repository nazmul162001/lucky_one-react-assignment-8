import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='d-flex justify-content-between px-5 align-items-center bg-danger'>
      <div className="logo fs-3 fw-bold text-light">Logo</div>
      <div className="nav-menu">
        <a className='text-decoration-none text-light' href="/Home">Home</a>
        <a className='text-decoration-none text-light' href="/About">About</a>
        <a className='text-decoration-none text-light' href="/Team">Our Team</a>
        <a className='text-decoration-none text-light' href="/Contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Header;
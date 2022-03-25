import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='d-flex justify-content-between px-5 align-items-center bg-danger'>
      <div className="logo fs-3 fw-bold text-light">Logo</div>
      <div className="nam-menu">
        <a className='text-decoration-none fs-5 px-3 text-light' href="/Home">Home</a>
        <a className='text-decoration-none fs-5 px-3 text-light' href="/About">About</a>
        <a className='text-decoration-none fs-5 px-3 text-light' href="/Team">Our Team</a>
        <a className='text-decoration-none fs-5 px-3 text-light' href="/Contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Header;
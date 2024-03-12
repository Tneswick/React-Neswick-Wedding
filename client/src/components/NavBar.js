// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          ☰
        </button>
        <Link to='/' onClick={''}>
          <h1 className='site-title'>
            Karen & Taylor
          </h1>
        </Link>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/photos" onClick={toggleMenu}>Photos</Link>
          <Link to="/rsvp" onClick={toggleMenu}>RSVP</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

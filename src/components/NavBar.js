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
        <button className="menu-button" onClick={toggleMenu}>
        ☰
        </button>
        <h1 className='site-title'>
          Neswick Wedding
        </h1>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/rsvp">RSVP</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

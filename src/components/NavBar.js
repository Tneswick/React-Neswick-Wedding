// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default NavBar;

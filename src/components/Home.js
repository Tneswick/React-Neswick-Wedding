// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Our Wedding Website!</h1>
      <nav>
        <Link to="/our-story">Our Story</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;

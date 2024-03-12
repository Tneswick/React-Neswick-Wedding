import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  const handleBtn = () => {
    console.log('btn clicked!');
  };

  return (
    <div className='home'>
      <img className='our-story-img' src="https://placehold.co/1280x720" alt="Our Story" />
      <h2 className='our-story-title'>Our Story</h2>
      <p className='our-story-p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='our-story-btn'>
        <Link to="/rsvp" onClick={handleBtn}>
          <button className='btn RSVPbtn'>RSVP</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

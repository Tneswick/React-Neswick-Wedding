import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleBtn = () => {
    console.log('btn clicked!');
  };

  return (
    <div className='home'>
      <img className='our-story-img' src='/images/img1.jpg' alt="Our Story" />
      <h2 className='our-story-title'>Our Story</h2>
      <p className='our-story-p'>
        Though we've already taken the step of becoming husband and wife in an intimate ceremony, we are thrilled to extend the celebration to all of our cherished friends and family! Our journey began back in 2017, evolving from a wonderful friendship that grew into a deep and abiding love. As we approach the anniversary of our private union, we cannot wait to share this special moment with each of you. Join us as we embark on this new chapter, surrounded by the love and support of our closest loved ones.
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

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Photos from './components/Photos';
import Rsvp from './components/RSVP';
import About from './components/About';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

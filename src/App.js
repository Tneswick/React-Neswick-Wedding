// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Photos from './components/Photos';
import Rsvp from './components/RSVP';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/photos" component={Photos} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

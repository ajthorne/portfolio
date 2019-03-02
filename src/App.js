import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Spotlight from './components/Spotlight.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
        <Spotlight />
      </div>
    );
  }
}

export default App;

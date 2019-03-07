import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Spotlight extends Component {
  render() {
    return (
      <section className="spotlight-container">
        <img className="featured-img" src="/assets/booknook1.png"/>
      </section>
    );
  }
}

export default Spotlight;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Spotlight extends Component {
  render() {
    return (
      <section className="spotlight-container">
        <img className="featured-img" src="/assets/codingbg.jpeg"/>
        <div className="featured-text">
          <p>Clever joke goes here... ?</p>
          <button>View Portfolio</button>
        </div>
      </section>
    );
  }
}

export default Spotlight;

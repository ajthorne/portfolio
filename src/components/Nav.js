import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="left-nav">
          <Link to="/"><li className="left-nav-name">Amanda Thorne</li>
          <li className="left-nav-title">Front End Developer</li></Link>
        </ul>
        <ul className="right-nav">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

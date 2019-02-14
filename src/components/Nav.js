import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="left-nav">
          <li className="left-nav-name">Amanda Thorne</li>
          <li className="left-nav-title">Front End Developer</li>
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

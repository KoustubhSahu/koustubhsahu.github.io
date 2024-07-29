import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="skills">Skills</Link></li>
        <li><Link to="background">Education</Link></li>
        <li><Link to="projects">Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

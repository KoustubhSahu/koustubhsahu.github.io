import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const image = require.context('./icon', false, /\.(png|jpe?g|svg)$/);

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="navbar-link-group"> 
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="background-marker" smooth={true} duration={500}>Background</Link></li>
        </div>
        
        <li><Link to="home" smooth={true} duration={500}> <img src={image("./k-logo.png")} className="k-logo" alt="k-logo"/></Link></li>
        <div className="navbar-link-group"> 
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

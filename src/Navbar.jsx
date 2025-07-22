import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <div className="logo">JanBroz</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Our Story</Link>
      <Link to="/dashboard">Highlights</Link>
    </nav>
  </header>
);

export default Navbar;

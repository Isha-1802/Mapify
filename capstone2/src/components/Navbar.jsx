import React from 'react';

const Navbar = ({ onHomeClick, onContactClick, onCreateMapClick, onMyMapsClick, onGetStartedClick }) => {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Mapify</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onCreateMapClick(); }}>Create Map</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onMyMapsClick(); }}>My Maps</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="btn get-started" onClick={(e) => { e.preventDefault(); onGetStartedClick(); }}>
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;


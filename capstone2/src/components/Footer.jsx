import React from 'react';

const Footer = ({ onHomeClick, onCreateMapClick, onMyMapsClick, onContactClick }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="logo">Mapify</h4>
          <p>A beautiful mind mapping tool that helps visualize your ideas with style.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onCreateMapClick(); }}>Create Map</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onMyMapsClick(); }}>My Maps</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onContactClick(); }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>About Mind Mapping</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Benefits</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Twitter</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (event, type, target) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (type === 'page') {
      onNavigate(type, target);
      return;
    }

    onNavigate(type, target);
  };

  return (
    <nav className="navbar">
      <div className="navbarupper">
        <div className="contact-info">
          <p>(051)5433700</p>
          <p>amc.health@punjab.gov.pk</p>
        </div>
        <div className="social-media">
          <i className="ri-facebook-circle-line"></i>
          <i className="ri-instagram-line"></i>
        </div>
      </div>

      <div className="navbarlower">
        <div className="navbar-logo">
          <img src="/public/logo.png" alt="Medical College Logo" />
        </div>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'section', 'home')}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'section', 'about')}>
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#programs" onClick={(e) => handleNavClick(e, 'section', 'programs')}>
              PROGRAMS
            </a>
          </li>
          <li>
            <a href="#faculty" onClick={(e) => handleNavClick(e, 'section', 'faculty')}>
              OUR FACULTY
            </a>
          </li>
          <li>
            <a href="#admissions" onClick={(e) => handleNavClick(e, 'page', 'admissions')}>
              ADMISSIONS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'section', 'contact')}>
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
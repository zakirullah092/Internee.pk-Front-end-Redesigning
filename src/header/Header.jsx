import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faBriefcase, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/logo.webp" alt="Logo" />
      </div>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#courses">
              <FontAwesomeIcon icon={faBook} /> Courses
            </a>
          </li>
          <li>
            <a href="#internships">
              <FontAwesomeIcon icon={faBriefcase} /> Internships
            </a>
          </li>
          <li>
            <a href="#login">
              <FontAwesomeIcon icon={faSignInAlt} /> Log In
            </a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}

export default Header;

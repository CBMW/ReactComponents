import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle the menu when hamburger is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add event listener when menu is open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu-container" ref={menuRef}>
      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${isOpen ? 'open spin' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="energy-circle"></div>
      </div>

      {/* Dropdown Menu */}
      <nav className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/express-interest" onClick={toggleMenu}>
              Express Interest
            </Link>
          </li>
          <li>
            <Link to="/db" onClick={toggleMenu}>
              DB
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

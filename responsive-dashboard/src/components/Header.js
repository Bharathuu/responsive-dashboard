import React from 'react';
import { FaBell, FaSearch, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="header-left">
        <FaSearch className="icon" />
        <input type="text" placeholder="Search..." className="search-bar" />
        <FaBell className="icon" />
        <div className="toggle-icon" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
        <FaUserCircle className="icon" />
      </div>
      <div className="header-center">
        <span>pages/Dashboard</span>
        <span className="main-dashboard">Main Dashboard</span>
      </div>
      <div className="header-right">
        <h1>HORIZON FREE</h1>
      </div>
    </header>
  );
};

export default Header;

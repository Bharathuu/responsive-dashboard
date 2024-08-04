import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default DarkModeToggle;

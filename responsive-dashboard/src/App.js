import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Sidebar />
      <div className="main-layout">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;

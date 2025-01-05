import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div className="logo">AB's Portfolio</div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          {menuOpen && <nav className="menu">
  <a href="/" className="menu-item">
    <img src="MenuIcon/HomeIcon.png" alt="Home" className="menu-icon" />
    Home
  </a>
  <a href="/projects" className="menu-item">
    <img src="MenuIcon/ProjectIcon.png" alt="Projects" className="menu-icon" />
    Projects
  </a>
  <a href="/contact" className="menu-item">
    <img src="MenuIcon/GetInTouchIcon.png" alt="Contact" className="menu-icon" />
    Get in Touch
  </a>
</nav>}
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          &copy; {new Date().getFullYear()} AB's Portfolio. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
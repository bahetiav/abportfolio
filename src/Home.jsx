import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        {/* Left Section */}
        <div className="text-content">
          <h1>
            Hi There, <br />
            I'm <span className="name-highlight">Avik Baheti</span>
          </h1>
          <p>
          An AI enthusiast with a deep passion for <span className="highlight">Generative AI</span>, <span className="highlight">Deep Learning</span>, and exploring the limitless possibilities of <span className="highlight">artificial intelligence</span>. From unraveling complex algorithms to building innovative AI-driven solutions, I'm on a journey to redefine how technology interacts with the world.
            <span className="cursor">|</span>
          </p>
          <button className="about-button">About Me</button>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="assets/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="assets/github.png" alt="GitHub" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="assets/twitter.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="assets/telegram.png" alt="Telegram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="assets/dev.png" alt="DEV" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="avatar-container">
          <img src="assets/avik.png" alt="Avatar" className="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
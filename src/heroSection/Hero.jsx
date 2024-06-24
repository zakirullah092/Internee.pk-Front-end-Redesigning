import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h1>Welcome to Internee.pk</h1>
        <p>Your Gateway to the IT Industry</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/analysis.webp" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;

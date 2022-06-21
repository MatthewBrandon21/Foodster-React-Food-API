import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/FOOD background video.mp4' autoPlay loop muted />
      <h1>Teman Saat Lapar</h1>
      <p>Biar Ga bosen makan itu - itu terus...</p>
      <div className='hero-btns'>
        <Link to="/search" className='btn-mobile'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            Find Foods!
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default HeroSection;

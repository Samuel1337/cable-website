import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const goTo = (id) => {
    if (id) document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='hero-container' id="home">
      <video
        preload="none"
        poster="./images/poster1.png" 
        src='./videos/video-3.mp4'
        autoPlay
        loop
        muted
      />
      <h1>CABLE, THE GOLDEN GATE EPIC</h1>
      <p>ADVENTURE AWAITS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => goTo("about")}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => goTo("about")}
        >
          WATCH TEASER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videoSrc from '../videos/video-3.mp4';
import posterSrc from '../images/poster1.png';
import titleSrc from '../images/cable-title.png';

function HeroSection() {

  const goTo = (id) => {
    if (id) document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='hero-container' id="home">
      <video
        preload="none"
        poster={posterSrc} 
        src={videoSrc}
        autoPlay
        playsInline
        loop
        muted
      />
      <div className='hero-island'>
        <img loading="lazy" src={titleSrc} alt="" />
        {/* <h1>CABLE, THE GOLDEN GATE EPIC</h1> */}
        {/* <p>ADVENTURE AWAITS</p> */}
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
            onClick={() => goTo("musical")}
          >
            WATCH TEASER <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

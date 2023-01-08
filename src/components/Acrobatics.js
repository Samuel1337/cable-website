import React from 'react';
import '../App.css';
import './Acrobatics.css';
import Break from './Break';
import videoSrc from '../videos/acrobatics.mp4';
import posterSrc from '../images/poster2.png';

function HeroSection() {

  const goTo = (id) => {
    if (id) document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='acrobatics-container' id="home">
      <video
      src={videoSrc}
      preload='none'
      poster={posterSrc}
      className='acrobatics-video'
      autoPlay
      playsInline
      loop
      muted />
      {/* <p>Holograms, Projections, Acrobatics, and more</p> */}
      <Break/>
    </div>
  );
}

export default HeroSection;

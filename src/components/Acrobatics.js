import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Acrobatics.css';
import Break from './Break';

function HeroSection() {

  const goTo = (id) => {
    if (id) document.getElementById(id).scrollIntoView();
  };

  return (
    <div className='acrobatics-container' id="home">
      <video src='./videos/acrobatics.mp4' className='acrobatics-video' autoPlay loop muted />
      {/* <p>Holograms, Projections, Acrobatics, and more</p> */}
      <Break/>
    </div>
  );
}

export default HeroSection;

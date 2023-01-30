import React from 'react';
import '../App.css';
import './Acrobatics.css';
import videoSrc from '../videos/acrobatics.mp4';
import posterSrc from '../images/poster2.png';

function Acrobatics() {

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
    </div>
  );
}

export default Acrobatics;

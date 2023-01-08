import React from 'react';
import './Cards.css';
import './VR.css';

function VR() {
  return (
    <div className='VR' id="VR">
      <h1>VR</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='VR__video'>
            <iframe
              className='VR__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            </div>
            <div className='VR__text'>
            <p>
              Cable, the Golden Gate VR Experience is a three part journey: an art installation, a VR experience, and an interactive exhibition. Together they will provide thirty minutes of an involving sensory and emotional adventure.
            </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default VR;

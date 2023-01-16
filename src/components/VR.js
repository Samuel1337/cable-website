import React from 'react';
import './Cards.css';
import './VR.css';
import { Fade } from 'react-reveal';

function VR() {
  return (
    <div className='VR' id="VR">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='VR__video'>
              <Fade bottom distance="10%">
                <iframe 
                  className='VR__iframe'
                  src="https://www.youtube.com/embed/_oMH_gy7r60"
                  title="San Francisco"
                  frameBorder="0"
                  allowFullScreen
                >
                </iframe> 
              </Fade>
            </div>
            <div className='VR__text'>
              <Fade bottom distance="10%">
                <h1>DISCOVERING</h1>
                <h1>NEW WAYS</h1>
                <h1>TO TELL A STORY</h1>
                <br></br>
                <br></br>
                <p>
                <span className='italic'>Cable, the Golden Gate VR Experience</span> is a three part journey:
                an art installation, a VR experience, and an interactive exhibition.
                Together they will provide thirty minutes of an involving sensory and
                emotional adventure.
                </p>
              </Fade>
            </div>
          </ul>        
        </div>
      </div>
    </div>
  );
}

export default VR;

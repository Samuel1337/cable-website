import React from 'react';
import './Cards.css';
import './Musical.css';
import picture from '../images/colorized17.jpg'
import { Fade } from 'react-reveal';

function Musical() {
  return (
    <div className='musical' id="musical">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <div className='musical__video'>
              <Fade bottom distance="10%">
                <img className='musical__img' src={picture} alt="" />
              </Fade>
            {/* <iframe 
              className='musical__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe> 
            </div> */}
            <div className='musical__text'>
              <Fade bottom distance="10%">
                <h1>THE GOLDEN GATE MUSICAL</h1>
                <br></br>
                <br></br>
                <p>
                  Cable, the Golden Gate Musical brings Tony's journey to life in an exhilarating production that will combine the latest technology in the theater with world-class acting, live music, and aerial choreography.
                  Step into the experience of spinning the iconic cables of the Golden Gate Bridge!
                </p>
              </Fade>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Musical;

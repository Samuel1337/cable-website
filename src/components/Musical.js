import React from 'react';
import './Cards.css';
import './Musical.css';
import { Fade } from 'react-reveal';

function Musical() {
  return (
    <div className='musical' id="musical">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='musical__items'>
            
            <div className='musical__text'>
              <Fade bottom distance="10%">
                <h1>THE GOLDEN GATE MUSICAL</h1>
                <br></br>
                <br></br>
                <p>
                  <span className='italic'>Cable, the Golden Gate Musical</span> brings Jesse's journey to life in an exhilarating production that will combine the latest technology in the theater with world-class acting, music, and aerial choreography.
                  Step into the experience of spinning the iconic cables of the Golden Gate Bridge!
                </p>
              </Fade>
            </div>

            <div className='musical__video'>
              <Fade bottom distance="10%">
                <iframe
                  className='musical__iframe'
                  src="https://www.youtube.com/embed/wp17o1hxmws"
                  title="San Francisco 2"
                  frameBorder="0"
                  allowFullScreen
                >
                </iframe>
              </Fade>
            </div>
            
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Musical;

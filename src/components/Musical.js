import React from 'react';
import './Cards.css';
import './Musical.css';

function Musical() {
  return (
    <div className='musical' id="musical">
      <h1>MUSICAL</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='musical__video'>
            <iframe
              className='musical__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            </div>
            <div className='musical__text'>
              <p>
                Cable, the Golden Gate Musical brings Tony’s journey to life in an exhilarating production that will combine the latest technology in the theater with world-class acting, live music, and aerial choreography.
              </p>
              <p>
                Step into the experience of spinning the iconic cables of the Golden Gate Bridge!
              </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Musical;

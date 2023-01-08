import React from 'react';
import './Cards.css';
import './About.css';

function About() {
  return (
    <div className='about' id="about">
      <h1>A NEW GENERATION, A NEW EXPLANATION</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='about__video'>
            <iframe
              className='about__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            </div>
            <div className='about__text'>
              <p>
                The Golden Gate Bridge is the symbol of Impossible Dreams.
              </p>
              <p>
                Against all odds, the bridge that couldn’t be built stands firm until today.
              </p>
              <p>
                Our mission is to inspire contemporary audiences to believe that Impossible Dreams are Possible.
              </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default About;

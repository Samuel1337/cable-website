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
                All Strauss needed was men and money. Experts said that at least 35 men
                would die building the bridge. The men came anyway. Forced by the
                Great Depression, they came from nearby and as far away as Oklahoma,
                Arkansas, and New York City. And finally, thanks to his grit and
                determination, he got the money.
              </p>
              <br></br>
              <p>
                As a tribute to the courageous men who built this glorious bridge, Cable
                Productions is proud to introduce Cable, The Golden Gate Epic.
              </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default About;

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
                Everybody knows the Golden Gate Bridge.
              </p>
              <p>
                It is San Francisco's Impossible Dream.
              </p>
              <br></br>
              <p>
                They said it could not be built. The economy, the politics, and the elements of nature
                were not in its favor.
                While many iconic films feature this world wonder, there is not
                a single story about how the Impossible Dream came true.
              </p>
              <p>
                Until now.
              </p>
              <br></br>
              <p>
                As a tribute to the courageous men who built this glorious bridge, Cable
                Productions is proud to introduce Cable, The Golden Gate Musical.
              </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default About;

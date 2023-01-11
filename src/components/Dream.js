import React from 'react';
import './Cards.css';
import './Dream.css';
import picture from '../images/colorized17.jpg'
import { Fade } from 'react-reveal';
import dreamSrc from '../images/dream3.png';

function Dream() {
  return (
    <div className='dream' id="dream">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='dreams__items'>
            <Fade>
              <div className='dream__header'>
                <h1>DREAM</h1>
                <h1>THE IMPOSSIBLE</h1>
                <h1>FOUNDATION</h1>
                {/* <img src={dreamSrc} className='dream__img' /> */}
              </div>
                
              <div className='dream__text'>
                <p>
                  Just like Tony in our story, many young people grow up
                  with big dreams in their souls.  But circumstances would have it
                  that their dreams get snuffed out by struggle and  difficult
                  times during their early years.
                </p>
                <br></br>
                <p>
                  The Dream the Impossible Foundation will honor 10 young people each
                  year with grants and dream support for one year to help them claim
                  their Impossible Dreams and move toward making them reality.
                </p>
                <br></br>
                <p>
                  What better time to support our young people than when they are
                  ready to step into the world with their own unique visions!
                </p>
              </div>
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dream;

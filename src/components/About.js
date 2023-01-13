import React from 'react';
import './Cards.css';
import './About.css';
import picture from '../images/colorized17.jpg'
import { Fade } from 'react-reveal';

function About() {
  return (
    <div className='about' id="about">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='about__items'>
            <div className='about__video'>
              <Fade bottom distance="10%">
                <img loading="lazy" className='about__img' src={picture} alt="" />
              </Fade>
            {/* <iframe 
              className='about__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe> */}
            </div>
            <div className='about__text'>
              <Fade bottom distance="10%">
                <h1>A NEW GENERATION</h1>
                <h1>A NEW EXPLANATION</h1>
                <br></br>
                <br></br>
                <p>
                  The Golden Gate Bridge is the symbol of Impossible Dreams.
                  Against all odds, the bridge that couldn't be built stands firm until today.
                  Our mission is to inspire contemporary audiences to believe that
                  <span className='italic'> Impossible Dreams are Possible </span>
                  by retelling this forgotten adventure.
                </p>
              </Fade>
            </div>
          </ul>
          <div className='about__subtitle'>
            <Fade bottom distance="10%">
              <p>NOVEL</p>
              <p>MUSICAL</p>
              <p>VR EXPERIENCE</p>
            </Fade>
          </div>          
        </div>
      </div>
    </div>
  );
}

export default About;

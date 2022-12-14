import React from 'react';
import './Cards.css';
import './Dream.css';

function Dream() {
  return (
    <div className='dream' id="dream">
      <h1>DREAM THE IMPOSSIBLE FOUNDATION</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <div className='dream__img-wrap'>
              <img src="images/dream2.png" className='dream__img' />
            </div>
            <div className='dream__text'>
              <p>
                Many young people, just like Tony in the story of Cable,  grow up
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dream;

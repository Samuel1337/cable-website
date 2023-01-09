import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import './Cards.css';
import './Novel.css';

function Novel() {  

  return (
    <div className='novel' id="novel">
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <div className='novel__video'>
            {/* <iframe
              className='novel__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe> */}
            </div>
            <div className='novel__text'>
              <Fade bottom distance="10%">
                <h1>CABLE, THE NOVEL</h1>
              <br></br>
                <p>
                  We have been developing an underlying novel that will be the foundation for all our creative expressions.
                </p>
              <br></br>
                <p>
                  The story focuses on Tony who loses his family to the Oklahoma Dust Bowl and joins the Great Migration to California in search of a new beginning.
                </p>
              <br></br>
                <p>
                  In the magnificent city of San Francisco he embarks upon a journey of risk and danger, friendship and betrayal, love lost and found, as he works on the construction of the Golden Gate Bridge,<span className='italic'> the Impossible Dream.</span>
                </p>
              </Fade>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Novel;

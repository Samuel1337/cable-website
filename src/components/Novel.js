import React from 'react';
import './Cards.css';
import './Novel.css';

function Novel() {
  return (
    <div className='novel' id="novel">
      <h1>NOVEL</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div className='novel__video'>
            <iframe
              className='novel__iframe'
              src="https://www.youtube.com/embed/ZUxfScnbf-w"
              title="San Francisco"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            </div>
            <div className='novel__text'>
              <p>
                We have been developing an underlying novel that will be the foundation for all our creative expressions.
              </p>
              <p>
                The story focuses on Tony who loses his family to the Oklahoma Dust Bowl and joins the Great Migration to California in search of a new beginning.
              </p>
              <p>
                In the magnificent city of San Francisco he embarks upon a journey of risk and danger, friendship and betrayal, love lost and found, as he works on the construction of the Golden Gate Bridge, the Impossible Dream.
              </p>
            </div>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Novel;

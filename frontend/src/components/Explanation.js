import React from 'react';
import './Cards.css';
import './Explanation.css';

function Explanation() {
  return (
    <div className='explanation' id="explanation">
      <h1>CELEBRATING THE WORKERS</h1>
      <div className='explanation__container'>
        <div className='explanation__wrapper'>
        <ul className='explanation__items'>
            <div className='explanation__text'>
              <p>
                At the Welcome Center of the Golden Gate Bridge you will find the statue of engineer Joseph Strauss,
                the visionary of the project. What you won’t find is a monument dedicated to the workers who risked
                their lives to fasten each rivet and to lay each cable on the bridge.
              </p>
              <br></br>
              <p>
                Coming from diverse backgrounds each man carried the weight of their broken dreams as the lights of
                their generation were put out by the pressing crisis. The unique project of the Golden Gate Bridge
                gave them a chance to give a new hope to America, and with it, to rebuild their own lives.
              </p>
            </div>
            <div className='explanation__video'>
            <iframe
              className='explanation__iframe'
              src="https://www.youtube.com/embed/wp17o1hxmws"
              title="San Francisco 2"
              frameBorder="0"
              allowFullScreen
            >
            </iframe>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Explanation;

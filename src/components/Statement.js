import React from 'react';
import { Fade } from 'react-reveal';
import './Statement.css';

function Statement(props) {

  function statement(num) {
    if (num === "1") {
      return (
        <div className='statement' id="statement">
          <Fade bottom distance="10%">
            <h1>"<span>D</span>ARE <span>T</span>O <span>D</span>REAM"</h1>
            <p>— Joseph Strauss, Golden Gate Bridge</p>
          </Fade>
        </div>
      );  
    } else if (num === "2") {
      return (
        <div className='statement' id="statement">
          <Fade bottom distance="10%">
            <h1><span>"I</span>MPOSSIBLE <span>D</span>REAMS ARE <span>P</span>OSSIBLE"</h1>
            <p>— CEO & Founder, Cable Productions</p>
          </Fade>
        </div>
      );
    }
  }

  return (
    <>
      {statement(props.num)}
    </>
  );
}

export default Statement;

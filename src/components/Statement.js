import React from 'react';
import './Statement.css';

function Statement(props) {

  function statement(num) {
    if (num === "1") {
      return (
        <div className='statement' id="statement">
          <h1>"<span>D</span>ARE <span>T</span>O <span>D</span>REAM"</h1>
          <p>— Chief Engineer, Golden Gate Bridge</p>
        </div>
      );  
    } else if (num === "2") {
      return (
        <div className='statement' id="statement">
          <h1><span>"I</span>MPOSSIBLE <span>D</span>REAMS ARE <span>P</span>OSSIBLE"</h1>
          <p>— Don Proptra, CEO & Founder</p>
        </div>
      );
    } else {
      return (
        <div className='statement' id="statement">
          <h1><span>I</span>MPOSSIBLE <span>D</span>REAMS ARE <span>P</span>OSSIBLA</h1>
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

import React from 'react';
import { Fade } from 'react-reveal';
import './Statement.css';
import epicSrc from "../images/fog3.png";
import lazySrc from "../images/fog3-lazy.png";

function Statement(props) {

  function statement(num) {
    if (num === "1") {
      return (
        <div className='epic-statement'>
          <h1>"<span>D</span>ARE <span>T</span>O <span>D</span>REAM"</h1>
          <p>— Joseph Strauss, Golden Gate Bridge</p>
        </div>
      );  
    } else if (num === "2") {
      return (
        <div className='epic-statement'>
          <h1><span>"I</span>MPOSSIBLE <span>D</span>REAMS ARE <span>P</span>OSSIBLE"</h1>
          <p>— CEO & Founder, Cable Productions</p>
        </div>
      );
    }
  }

  return (
    <div className='statement' id="statement">
      <img className='low-res' src={lazySrc} alt="epic" />
      <img className='high-res' poster={lazySrc} src={epicSrc} alt="epic" />
      <Fade bottom distance="10%">
        {statement(props.num)}
      </Fade>
    </div>
  );
}

export default Statement;

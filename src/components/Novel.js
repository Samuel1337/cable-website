import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import './Cards.css';
import './Novel.css';
import dustBowl1 from "../images/colorized25.jpg";
import migrant1 from "../images/colorized23.jpg";
import migrant2 from "../images/colorized24.jpg";
import greatDepression1 from "../images/colorized19.jpg";
import GoldenGateBridge1 from "../images/colorized5.jpg";
import GoldenGateBridge2 from "../images/colorized14.jpg";


function Novel() {  

  return (
    <div className='novel' id="novel">
      <div className='novel__container'>
        <div className='novel__wrapper'>
          
          <div className='novel__flex'>
            
            <div className='novel__column'>
              <Fade bottom distance="10%">
                <h1>CABLE,</h1><h1>THE NOVEL</h1>
                <br></br>
                <p>
                  We have been developing an underlying novel that will be the foundation for all our creative expressions.
                </p>
                <br></br>
                <img src={dustBowl1} className="novel__img" />
                <p className='description'>Dust storms in Oklahoma</p>
                <img src={migrant1} className="novel__img" />
                <p className='description'>Family of "Okies" migrating West</p>
              </Fade>
            </div>

            <div className='novel__column'>
              <Fade bottom distance="10%">
                <img src={migrant2} className="novel__img invisible" />
                <p className='description invisible'>Migrant mother in California</p>
                <p>
                  The story focuses on Tony who loses his family to the Oklahoma Dust Bowl and joins the Great Migration to California in search of a new beginning.
                </p>
                <br></br>
                <img src={greatDepression1} className="novel__img" />
                <p className='description'>Mass of unemployed during the Great Depression</p>
              </Fade>
            </div>

            <div className='novel__column'>
              <Fade bottom distance="10%">
                <img src={GoldenGateBridge1} className="novel__img" />
                <p className='description'>Cabling of the Golden Gate Bridge</p>
                <br></br>
                <p>
                  In the magnificent city of San Francisco he embarks upon a journey of risk and danger, friendship and betrayal, love lost and found, as he works on the construction of the Golden Gate Bridge,<span className='italic'> the Impossible Dream.</span>
                </p>
                <br></br>
                <img src={GoldenGateBridge2} className="novel__img" />
                <p className='description'>Cable crew laying the catwalk</p>
              </Fade>
            </div>
          
          </div>     
        </div>
      </div>
    </div>
  );
}

export default Novel;

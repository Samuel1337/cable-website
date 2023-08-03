import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import imgSrc from "../images/cable-transparent-gold.png";

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='top-social-wrap'>
        <img className='footer-logo' src={imgSrc} alt="logo" />
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>The Team</h2>
            <Link>Don Propstra</Link>
            <Link>Sam Martins</Link>
            <Link>Michael Leonard</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='social-logo'>
              CABLE PRODUCTIONS <span> is an incubator production company uniquely creating uplifting and inspiring entertainment.</span>
            </div>
          <small className='website-rights'>CABLE PRODUCTIONS © 2023</small>
          {/* <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              // target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              // target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              // target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              // target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              // target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div> */}
          
        </div>
      </section>
    </div>
        <p className='credits__palette'>Pictures colorized for the first time in history using AI technology with <a href='https://palette.fm' target="_blank" rel="noreferrer">Palette.fm</a></p>
        </>
        );
}

export default Footer;

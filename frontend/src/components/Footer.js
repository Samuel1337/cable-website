import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <div className='footer-logo'> */}
      <div className='top-social-wrap'>
        <img className='footer-logo' src="images/cable-transparent-red.png" />
        {/* </div> */}
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>The Team</h2>
            <Link to='/'>Don Propstra</Link>
            <Link to='/'>Sam Martins</Link>
            <Link to='/'>Daniel Lopez de Llano</Link>
            <Link to='/'>Marta Ribeiro</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
            <Link to='/' className='social-logo'>
              CABLE PRODUCTIONS
            </Link>
          <small className='website-rights'>CABLE PRODUCTIONS © 2023</small>
          <div className='social-icons'>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

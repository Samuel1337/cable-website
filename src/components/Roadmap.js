import './Roadmap.css';
import { Button } from './Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Fade } from 'react-reveal';

function Roadmap() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9j2vma', 'template_wwdziue', e.target, 'I4TYlK529hqAIFUA0')
      .then((result) => {
          console.log(result.text);
          clearFields();
      }, (error) => {
          console.log(error.text);
      });
  };

  const clearFields = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    name.value = '';
    email.value = '';
    message.value = '';
    button.value = 'Message Sent!';
  }

  return (
    <div className='roadmap' id="roadmap">
      <div className='roadmap__container'>
        <section className='roadmap-subscription'>
        <Fade>
        <h1 className='roadmap-subscription-heading'>
          BE A PART OF THIS DREAM
        </h1>
        <p className='roadmap-subscription-text'>
          LET'S BUILD SOMETHING GREAT
        </p>
        </Fade>
        <div className='input-areas'>
        <Fade>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className='roadmap-input'
              name='user_name'
              type='text'
              placeholder='Your Name'
              id='name'
            />
            <input
              className='roadmap-input'
              name='user_email'
              type='email'
              placeholder='Your Email'
              id='email'
            />
            <textarea
              className='roadmap-input'
              name='message'
              type='text'
              placeholder='Your Message'
              id='message'
            />
            <input
              type="submit"
              className='btn btn--medium btn--yellow'
              value="Send"  
              id="button"
            />
          </form>
        </Fade>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Roadmap;

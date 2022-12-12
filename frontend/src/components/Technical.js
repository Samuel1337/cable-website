import React from 'react';
import './Technical.css';
import './Cards.css';
import CardItem from './CardItem';

function Technical() {
  return (
    <div className='technical' id="technical">
      <div className='technical__container'>
        <div className='technical__wrapper'>
          <ul className='technical__items'>
            <CardItem src='images/tech-9.png' />
            <CardItem src='images/tech-11.png' />
          </ul>
          <h1 className='technical__title'>BRACE YOURSELF FOR BREATHTAKING VISUALS</h1>
          <ul className='technical__items'>
            <CardItem src='images/tech-12.png' />
            <CardItem src='images/tech-16.png' />
            <CardItem src='images/tech-15.png' />
          </ul>
          <h1 className='technical__title'>CUTTING-EDGE TECHNOLOGY MEETS THE FINE ARTS</h1>
          <ul className='technical__items'>
            <CardItem src='images/tech-14.png' />
            <CardItem src='images/tech-19.png' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Technical;

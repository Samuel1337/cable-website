import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
           <img loading="lazy"
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

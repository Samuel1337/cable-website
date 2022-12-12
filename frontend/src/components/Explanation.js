import React from 'react';
import './Cards.css';
import './Explanation.css';

function Explanation() {
  return (
    <div className='explanation' id="explanation">
      <h1>EXPLANATION</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <div className='explanation__text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus et dui sit amet velit pharetra imperdiet. Sed libero odio,
                convallis ut eros in, dictum luctus nisi. Aenean finibus ante purus,
                eleifend egestas justo convallis eget. Proin vel rutrum sem. Nam egestas
                sodales venenatis. Curabitur blandit imperdiet laoreet. Nam aliquet nisi
                vel lobortis malesuada. Praesent consequat varius ipsum non imperdiet.
                Nam ut purus vitae dui venenatis imperdiet a ac leo. Etiam lacinia finibus
                vehicula. Aliquam nec tincidunt nulla. Morbi dictum sem ac gravida congue.
                Etiam at aliquet elit, non mollis urna. Ut suscipit faucibus libero vitae
                iaculis. Ut ligula odio, suscipit nec velit a, auctor ornare felis.
              </p>
            </div>
            <div className='explanation__video'>
            <iframe
              className='explanation__iframe'
              src="https://www.youtube.com/embed/wp17o1hxmws"
              title="San Francisco"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture"
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

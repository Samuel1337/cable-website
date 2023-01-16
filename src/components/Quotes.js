import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules 
import { Autoplay } from "swiper";

import './Cards.css';
import './Quotes.css';

function Quotes() {

  return (
    <div className='quotes' id="quotes">
      <div className='quotes__container'>
        <div className='quotes__wrapper'>
          
          <Swiper className="mySwiper testimonial" modules={[Autoplay]} slidesPerView={1} autoplay={{delay: 5000,  pauseOnMouseEnter: true, disableOnInteraction: false}}>
            <SwiperSlide className='slide'>
                <p>The Golden Gate Bridge is one of the greatest monuments of all time. What has been thus played up in form should not be let down in color.</p>
                <br></br>
                <h1 className='quotation-mark'>“</h1>
                <h1 className='quotation-name'>Irving Morrow</h1>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <p>This bridge needs neither praise, eulogy nor encomium. It speaks for itself. We who have labored long are grateful. What Nature rent asunder long ago, man has joined today.</p>
                <br></br>
                <h1 className='quotation-mark'>“</h1>
                <h1 className='quotation-name'>Joseph Strauss</h1>
            </SwiperSlide>
            <SwiperSlide className='slide'>
                <p>The Golden Gate Bridge should be understood symbolically, in the sense that it does not go from America back to America but that it opens up from America to the world.</p>
                <br></br>
                <h1 className='quotation-mark'>“</h1>
                <h1 className='quotation-name'>Simeon Wade</h1>
            </SwiperSlide>
          </Swiper>         
        </div>
      </div>
    </div>
  );
}

export default Quotes;

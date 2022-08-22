import React from 'react'
import './Testemonials.css'
import TImage from '../../assets/logo.wipro.jpg';


// import swiper  core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';





const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h4>Review from clients</h4>
      <h1>Testemonials</h1>
      <Swiper className="container testemonials-container"
        // install Swiper modules     
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testemonials">
          <div className="client-avatar">
            <img src={TImage} alt="" />
          </div>
          <h5 className="client-name">Adarsh Alone</h5>
          <small className="client-review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet esse nihil provident nam reiciendis sit ad repudiandae, assumenda tenetur expedita id ipsa quas corporis minima, corrupti optio quo voluptatibus nisi.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testemonials
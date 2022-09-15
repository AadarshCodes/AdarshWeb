import React from 'react'
import './Testemonials.css'
import TImage from '../../assets/logo.wipro.jpg';

// import swiper  core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h4>Review from clients</h4>
      <h1>Testemonials</h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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
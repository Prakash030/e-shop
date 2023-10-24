import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules for swiper
import { Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./assets/pic3.jpg" alt="" className="img-fluid"/></SwiperSlide>
        <SwiperSlide><img src="./assets/pic5.jpg" alt="" className="img-fluid"/></SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Hero;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper text-white mt-10"
      >
        <SwiperSlide> <div className='bg-slider1 bg-cover h-96 w-full'></div> </SwiperSlide>
        <SwiperSlide> <div className='bg-slider2 bg-cover h-96 w-full'></div> </SwiperSlide>
      
      </Swiper>
    </>
  );
}

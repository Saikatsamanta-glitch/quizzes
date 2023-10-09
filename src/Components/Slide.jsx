import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
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
        className="mySwiper text-white mt-10"
      >
        <SwiperSlide> <img src="https://www.w3docs.com/uploads/media/default/0001/05/4482fe09d95a0be765154b9cefff5e07f7fc32ff.png" alt="" className='h-96 mx-auto' /> </SwiperSlide>
        <SwiperSlide> <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17954/production/_129269569_gettyimages-1236466459-3.jpg" alt="" className='h-96 mx-auto' /> </SwiperSlide>
        <SwiperSlide><img src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2021/03/04131433/MVU-BFADM-2020-Q4-Skyscraper-Future-of-Video-Games-Trends-Technology-Types-header-v2.jpg" alt="" className='h-96 mx-auto' /></SwiperSlide>
      </Swiper>
    </>
  );
}

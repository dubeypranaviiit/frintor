import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './swiperslide.css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const SwiperSlides = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img1.jpeg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img3.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/college-building-1.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/library.jpg" alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlides;

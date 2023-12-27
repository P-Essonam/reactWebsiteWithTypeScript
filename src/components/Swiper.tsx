
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';


import {Autoplay,  EffectCoverflow } from 'swiper/modules';

const Swiperjs = () => {
    return (
        
          <Swiper
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={false}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper w-full"
            allowTouchMove={false}
          >
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[300px]'>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
          </Swiper>
        
      );
}

export default Swiperjs



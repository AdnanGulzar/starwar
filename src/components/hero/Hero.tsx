
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./hero.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FC } from 'react';
const Hero:FC  = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://images.bauerhosting.com/legacy/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80" alt="starwar" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://pyxis.nymag.com/v1/imgs/ad7/b0c/45991227b9e02cf0ef2a12405537944958-star-wars-tv-ranked.2x.rsocial.w600.jpg" alt="starwar" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://media.vanityfair.com/photos/6271b7ebf0f4133d33c0cebc/16:9/w_1280,c_limit/Screen%20Shot%202022-05-03%20at%204.14.50%20PM.png" alt="starwar" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.bauerhosting.com/legacy/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80" alt="starwar" />
        </SwiperSlide>
        
      </Swiper>
  );
};
export default Hero
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img src="/img/oferta1.jpg" alt="Oferta 1" />
          <h2>🎉 ¡50% de Descuento en Biberones!</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/oferta2.jpg" alt="Oferta 2" />
          <h2>🚼 Pañales Premium con Envío Gratis</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/oferta3.jpg" alt="Oferta 3" />
          <h2>🛒 ¡Compra 2, llévate 1 gratis en juguetes!</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import group from "../../assets/images/Group.png";
import hilay from "../../assets/images/hilayqara.png";
import binary from "../../assets/images/Logo.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div id="partners">
      <h2>{t('partners')}</h2>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
            1444: {
              slidesPerView: 6,
            },
          }}
      >
        <SwiperSlide>
          <img src={group} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={binary} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hilay} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={group} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={binary} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hilay} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={group} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={binary} className="slide__img" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hilay} className="slide__img" alt="swiper" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;

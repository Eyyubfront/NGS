import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import bannerimg from "../../assets/images/homephoto/bannerphoto.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const Banner = () => {
  const { t } = useTranslation(); 

  const slides = [
    {
      title: t("projebaner"),
      description: t("bannerstext"),
      link: "/aboutus",
      buttonText: t("MoreDetails")
    }
  ];

  return (
    <div id="banner">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide__content">
              <img src={bannerimg} alt="Banner" />
              <div className="slide__description">
                <h2 className="slide__title">{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to={slide.link}><button type="button">{slide.buttonText}</button></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

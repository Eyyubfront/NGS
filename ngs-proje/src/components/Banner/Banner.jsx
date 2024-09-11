import React from "react";
import bannerimg from "../../assets/images/homephoto/bannerphoto.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const Banner = () => {
  const { t } = useTranslation(); 

  const slide = {
    title: t("projebaner"),
    description: t("bannerstext"),
    link: "/aboutus",
    buttonText: t("MoreDetails")
  };

  return (
    <div className="banner">
      <div className="banner__image-container">
        <img className="banner__image" src={bannerimg} alt="Banner" />
      </div>
      <div className="banner__content">
        <div className="banner__description">
          <h2 className="banner__title">{slide.title}</h2>
          <p className="banner__text">{slide.description}</p>
          <Link to={slide.link}>
            <button type="button" className="banner__button">
              {slide.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

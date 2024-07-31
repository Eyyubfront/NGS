import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import bannerimg from "../../assets/images/homephoto/bannerphoto.png";
import { Link } from "react-router-dom";
const Banner = () => {
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
        <SwiperSlide>
          <div className="slide__content">
            <img src={bannerimg} alt="img" />
            <div className="slide__description">
              <h2>NGS - Təhlükəsizliyin yeni nəsli!</h2>
              <p>
                Məqsədimiz yeni nəsil təhlükəsizlik texnologiyaları və
                metodikası ilə müştərilərimizin və əməkdaşlarının
                təhlükəsizliyini yüksək səvoyyədə təmin etməkdən ibarətdir.
              </p>
              <Link to="/adminprof"><button type="button">Ətraflı</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <img src={bannerimg} alt="img" />
            <div className="slide__description">
              <h2>NGS - Təhlükəsizliyin yeni nəsli!</h2>
              <p>
              Məqsədimiz yeni nəsil təhlükəsizlik texnologiyaları və
                metodikası ilə müştərilərimizin və əməkdaşlarının
                təhlükəsizliyini yüksək səvoyyədə təmin etməkdən ibarətdir.
              </p>
              <button type="button">Ətraflı</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <img src={bannerimg} alt="img" />
            <div className="slide__description">
              <h2>NGS - Təhlükəsizliyin yeni nəsli!</h2>
              <p>
              Məqsədimiz yeni nəsil təhlükəsizlik texnologiyaları və
                metodikası ilə müştərilərimizin və əməkdaşlarının
                təhlükəsizliyini yüksək səvoyyədə təmin etməkdən ibarətdir.
              </p>
              <button type="button">Ətraflı</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__content">
            <img src={bannerimg} alt="img" />
            <div className="slide__description">
              <h2>NGS - Təhlükəsizliyin yeni nəsli!</h2>
              <p>
              Məqsədimiz yeni nəsil təhlükəsizlik texnologiyaları və
                metodikası ilə müştərilərimizin və əməkdaşlarının
                təhlükəsizliyini yüksək səvoyyədə təmin etməkdən ibarətdir.
              </p>
              <button type="button">Ətraflı</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
import React from "react";
import PageContainer from "../../components/PageContainer";
import newsImg from "../../assets/images/homephoto/pageservicesix.png";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";

const News = () => {
  return (
    <PageContainer>
      <div id="news">
        <div className="news__head">
          <h1>Xəbərlər</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
            porta tristique nunc pretium. Pulvinar montes sed elementum sed
            viverra integer fermentum.
          </p>
        </div>

        <div className="news__body">
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
          <div className="news__box">
            <img src={newsImg} alt="img" />
            <div className="box__content">
                <h2>Təhlükəsiz mühitin əsasları nələrdir ?</h2>
            </div>
          </div>
        </div>

        <Cerfitacion />
      </div>
    </PageContainer>
  );
};

export default News;

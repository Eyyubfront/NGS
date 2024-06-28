import React from "react";
import PageContainer from "../../components/PageContainer";
import newsImg from "../../assets/images/homephoto/pageservicesix.png";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import { Link } from "react-router-dom";
import SubNews from "../SubNews/SubNews";

const News = () => {
  const newsData = [
    { id: 1, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 2, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 3, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 4, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 5, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 6, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 7, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 8, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
    { id: 9, title: "Təhlükəsiz mühitin əsasları nələrdir ?" },
  ];

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
          {newsData.map((item) => (
            <Link className="news__box" key={item.id} to="/subNews">
              <img src={newsImg} alt="img" />
              <div className="box__content">
                <h2>{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
        <Cerfitacion />
      </div>
    </PageContainer>
  );
};

export default News;
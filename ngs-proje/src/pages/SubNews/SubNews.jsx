import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import float from "../../assets/images/float.png";
import fir from "../../assets/images/news/first.png";
import sec from "../../assets/images/news/sec.png";
import thi from "../../assets/images/news/three.png";
import Cerfitacion from "../../components/Certifaciton/cerfitacion";
import { useParams } from "react-router";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const SubNews = () => {
  const { t } = useTranslation();
  
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  
useEffect(() => {
  const fetchNewsPost = async () => {
    try {
      const response = await axios.get(
        `https://ngs-794fc9210221.herokuapp.com/api/news/${newsId}`
      );
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching the news post", error);
    }
  };

  fetchNewsPost();
}, [newsId]);

if (!news) return <div>{t('loading')}</div>;

  console.log(news);
  return (
    <>
      <PageContainer>
        <div id="subNews">
          <div className="subNews__head">
            <h1>{t('danger')}</h1>
            <p>
            {news.title}
            </p>
          </div>
          <div className="subNews__content">
            <img src={float} alt="float" />
            <p>
              {news.content}
            </p>
          </div>

          <div className="subNews__body">
            <div>
              <h1>{t('offers')}</h1>
            </div>

            <div className="box__container">
              <div className="news__box">
                <img src={fir} alt="img" />
                <div className="box__content">
                  <h2>{t('danger')}</h2>
                </div>
              </div>
              <div className="news__box">
                <img src={sec} alt="img" />
                <div className="box__content">
                  <h2>{t('danger')}</h2>
                </div>
              </div>
              <div className="news__box">
                <img src={thi} alt="img" />
                <div className="box__content">
                  <h2>{t('danger')}</h2>
                </div>
              </div>
            </div>
          </div>

          <Cerfitacion />
        </div>
      </PageContainer>
    </>
  );
};

export default SubNews;

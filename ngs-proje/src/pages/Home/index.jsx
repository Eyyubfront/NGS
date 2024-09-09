import React, { useEffect } from 'react';
import PageContainer from "../../components/PageContainer";
import Certifaciton from "../../components/Certifaciton/cerfitacion";
import informationphoto from "../../assets/images/homephoto/information.png";
import homenwsphoto from "../../assets/images/homephoto/homenewsphoto.png";
import Container from '@mui/material/Container';
import Banner from "../../components/Banner/Banner";
import Partners from "../../components/Partners/Partners";
import Training from "../../components/Training/Training";
import HomeServis from "../../components/Homeservice/Homeservice";
import Servicesections from '../../components/Servicesections/Servicesections';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const handleResize = () => {
        const homenewsText = document.querySelector('.homenews__text');
        if (window.innerWidth <= 575) {
            homenewsText.textContent = 'Burada şirkətimiz haqqında ən son yenilikləri və elanları tapa bilərsiniz. Tərəfdaşlarımıza təqdim etdiyimiz dəyərlər haqqında sizə məlumat verməkdən məmnunuq.';
        } else {
            homenewsText.textContent = 'Burada şirkətimiz haqqında ən son yenilikləri və elanları tapa bilərsiniz. Müştərilərimizə və biznes tərəfdaşlarımıza təqdim etdiyimiz dəyərlər haqqında sizə məlumat verməkdən məmnunuq. Əlavə olaraq dünya təhlükəsizlik sektoru və onun yenilikləri haqqında da məlumat əldə edə, daim xəbərdar qala bilərsiniz.';
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <PageContainer>
        <Banner />
        <Container>
          <div id="information">
            <div className="information__container">
              <div className="information__left">
                <div className="information__top">{t('aboutUs')}</div>
                <div className="information__text">
                {t('projeabout')}
                </div>
                <Link className='hrefaboutus' to="/aboutus">
                
                <a className="informationbtn" href="">
                  <div className="information__button">{t('MoreDetails')}</div>
                </a>
                </Link>
              </div>
              <div className="information__right">
                <img
                  className="informationphoto"
                  src={informationphoto}
                  alt=""
                />
              </div>
            </div>
          </div>
          <Servicesections showDescription={false} />
        </Container>
        <Partners />
        <Training />
        <Container>
          <div id="homenews">
            <div className="homenews__container">
              <div className="homenews__left">
                <img className="homenewsphoto" src={homenwsphoto} alt="" />
              </div>
              <div className="homenews__right">
                <div className="homenews__top">{t('news')}</div>
                <div className="homenews__text">
                {t('newsabout')}
                </div>
                <Link className='newsbtnlinks' to="/news">
                  <div className="homenews__button">{t('MoreDetails')}</div>
                </Link>
              
              </div>
            </div>
          </div>
          <HomeServis />
        </Container>
        <Certifaciton />
      </PageContainer>
    </>
  );
};

export default Home;

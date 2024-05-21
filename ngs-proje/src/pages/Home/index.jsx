import React from 'react'
import PageContainer from '../../components/PageContainer';
import Certifaciton from '../../components/Certifaciton/cerfitacion';
import aboutinformationphoto from "../../assets/images/homephoto/aboutinformation.png"
const Home = () => {
  return (
    <>
      <PageContainer>
        <Certifaciton />
        <div id="about__information">
          <div className="about__container">
            <div className="about__left">
              <div className="about__top">
                Haqqımızda
              </div>
              <div className="about__text">
                NGS - NEW GENERATİON SAFETY MMC 2021-Cİ İLDƏN TƏHLÜKƏSİZLİK SEKTORUNDA FƏALİYYƏT GÖSTƏRİR. Şirkət FƏALİYYƏTƏ BAŞLAYAN GÜNDƏN PRİORİTETLƏRİNİ MÜŞTƏRİ MƏMNUNİYYƏTİ, XİDMƏT KEYFİYYƏTİ VƏ TƏHLÜKƏSİZLİYİ ÜZƏRİNDƏ QURARAQ ÖZ MƏQSƏDLƏRİNƏ
                GÖZLƏNİLƏNDƏN DAHA YÜKSƏK SƏVİYYƏDƏ ÇATMIŞDIR.
              </div>
              <a className='aboutinforbtn' href="">
                <div className="about__button">
                  Ətraflı
                </div>
              </a>
            </div>
            <div className="about__right">
              <img className='aboutinformationphoto' src={aboutinformationphoto} alt="" />
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default Home
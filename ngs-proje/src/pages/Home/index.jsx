import React from 'react'
import PageContainer from '../../components/PageContainer';
import Certifaciton from '../../components/Certifaciton/cerfitacion';
import informationphoto from "../../assets/images/homephoto/information.png";
import homenwsphoto from "../../assets/images/homephoto/homenewsphoto.png"
import Container from 'react-bootstrap/esm/Container';
import Banner from '../../components/Banner/Banner';
const Home = () => {
  return (
    <>
      <PageContainer>
        <Banner/>
        <Container>
          <div id="information">
            <div className="information__container">
              <div className="information__left">
                <div className="information__top">
                  Haqqımızda
                </div>
                <div className="information__text">
                  NGS - NEW GENERATİON SAFETY MMC 2021-Cİ İLDƏN TƏHLÜKƏSİZLİK SEKTORUNDA FƏALİYYƏT GÖSTƏRİR. Şirkət FƏALİYYƏTƏ BAŞLAYAN GÜNDƏN PRİORİTETLƏRİNİ MÜŞTƏRİ MƏMNUNİYYƏTİ, XİDMƏT KEYFİYYƏTİ VƏ TƏHLÜKƏSİZLİYİ ÜZƏRİNDƏ QURARAQ ÖZ MƏQSƏDLƏRİNƏ
                  GÖZLƏNİLƏNDƏN DAHA YÜKSƏK SƏVİYYƏDƏ ÇATMIŞDIR.
                </div>
                <a className='informationbtn' href="">
                  <div className="information__button">
                    Ətraflı
                  </div>
                </a>
              </div>
              <div className="information__right">
                <img className='informationphoto' src={informationphoto} alt="" />
              </div>
            </div>
          </div>
          <div id="homenews">
            <div className="homenews__container">
              <div className="homenews__left">
                <img className='homenewsphoto' src={homenwsphoto} alt="" />
              </div>


              <div className="homenews__right">
                <div className="homenews__top">
                  Xəbərlər
                </div>
                <div className="homenews__text">
                  Burada şirkətimiz haqqında ən son yenilikləri və elanları tapa bilərsiniz. Müştərilərimizə və biznes tərəfdaşlarımıza təqdim etdiyimiz dəyərlər haqqında sizə məlumat verməkdən məmnunuq. Əlavə olaraq dünya təhlükəsizlik sektoru və onun yenilikləri haqqında da məlumat əldə edə, daim xəbərdar qala bilərsiniz.
                </div>
                <a className='homenewsbtn' href="">
                  <div className="homenews__button">
                    Ətraflı
                  </div>
                </a>
              </div>

            </div>
          </div>
        </Container>
        <Certifaciton />
      </PageContainer>
    </>
  )
}

export default Home
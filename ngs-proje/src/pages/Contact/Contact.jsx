import React from 'react'
import PageContainer from '../../components/PageContainer'
import HomeServis from '../../components/Homeservice/Homeservice'
import map from "../../assets/images/contact/map.png"
import { Container } from '@mui/material'
const Contact = () => {
  return (
    <>
    <PageContainer>
    <Container>
<div id="contact">

    <div className="contact__container">
        <div className="contact__top">
            <div className="contact__topname">
            Əlaqə
            </div>
            <div className="contact__toptext">
            Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.
            </div>
        </div>
<div className="contact__buttom">
    <div className="contact__left">
        <div className="conatct__phone">
            <h5 className='contactkindname'>Telefon</h5>
            <p className='contactkinds'>+994 51 316 88 94</p>
        </div>
        <div className="conatct__mail">
            <h5 className='contactkindname'>Elektron poçt</h5>
            <p  className='contactkinds'>ngs.azerbaijan@gmail.com</p>
        </div>
        <div className="conatct__watch">
            <h5 className='contactkindname'>İş saatları</h5>
            <p className='contactkinds'>Bazar ertəsi - Şənbə günü: 09:00 - 18:00
Şənbə günü: 9:00 - 14:00</p>
        </div>
        <div className="conatct__location">
            <h5  className='contactkindname'>Ünvan</h5>
            <p  className='contactkinds'>Nəriman Nərimanov rayonu, Bakı şəhəri, Azərbaycan</p>
        </div>
    </div>
    <div className="contact__right">
        <img className='mapphoto' src={map} alt="" />
    </div>
</div>
    </div>
</div>
        <HomeServis/>
    </Container>
    </PageContainer>
    </>
  )
}

export default Contact
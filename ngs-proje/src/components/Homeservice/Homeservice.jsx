import React from 'react'
import homeservis from "../../assets/images/homephoto/homeservis.png"
import Container from 'react-bootstrap/esm/Container'
const HomeServis = () => {
  return (
    <div id='homeservice'>
        <Container>

<div className="homeservice__container">
    <div className="homeservice__left">
        <div className="homeservice__top">
            <p className='homeservicename'>Xidmətlə bağlı müraciət edin.</p>
            <div className="homeservicetext">Xidmətlərimizdən istifadə etmək və bizimlə əməkdaşlıq üçün elə indi müraciət edə bilərsiniz.</div>
       <div className="homeservice__input">
        <input className='homeservicinputs' type="text" placeholder='Ad/Soyad' />
        <input className='homeservicinputs' type="text" placeholder='Elektron Poçt' />
        <input className='homeservicinputs' type="text" placeholder='Ölkə/Şəhər' />
        <input className='homeservicinputs' type="text" placeholder='Başlıq' />
        <input className='homeservicinputsmesage' type="text" placeholder='Mövzu' />
       </div>
       <div className="homeservice__button">
        <a className='servicelinkhref'  href="">
        <p className='sendhomeservicebtn'>Göndər</p>
        </a>
       </div>
        </div>
    </div>

    <div className="homeservice__right">
        <img className='homeservicephoto' src={homeservis} alt="" />
    </div>
</div>
        </Container>
    </div>
  )
}

export default HomeServis
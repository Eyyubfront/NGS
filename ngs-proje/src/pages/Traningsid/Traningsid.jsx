import React from 'react'
import Certifaciton from "../../components/Certifaciton/cerfitacion";
import Traningcontainer from '../../components/Traningcontainer/Traningcontainer';
import { Container } from '@mui/material';
import traningidphoto from "../../assets/images/traningid/traningid.png"
import PageContainer from '../../components/PageContainer';
import { FaCalendarAlt,FaClock, FaMapMarkerAlt  } from 'react-icons/fa';
const Traningsid = () => {
  return (
    <PageContainer>

    <div id='Traningsid'>
<Container>
    <div className="traningid__top">
        <img className='traningidphoto' src={traningidphoto} alt="" />
    </div>
    <div className="traningid__center">
       <div className="traningid__left">
        <h2 className='traningidsnames'>Sətəm üzrə siyasətin hazırlanması təlimi</h2>
        <p className='traningidsname'> Lorem ipsum dolor sit amet consectetur. Eget aenean nisi urna amet. Enim mattis nunc arcu a nisl eu ipsum. Turpis gravida elementum praesent mattis vulputate sed aliquet volutpat. Egestas ante et cursus orci lacus. Odio consectetur eu praesent rutrum libero cursus ante in. Eu lobortis pharetra condimentum arcu netus. Pretium ut consequat viverra amet sem dictumst volutpat ullamcorper. Eleifend suspendisse diam cursus egestas dis id quisque. A pretium aliquet blandit at cras convallis et pellentesque. Sit gravida euismod tristique donec. Ut posuere proin sagittis odio. Sit pellentesque massa eleifend tempor risus. Nullam quis egestas sollicitudin hac. Turpis gravida elementum praesent mattis vulputate sed aliquet volutpat. Egestas ante et cursus orci lacus.</p>
       </div>
        <div className="rightline"></div>
       <div className="traningid__right">
        <div className="right__date">
        <FaCalendarAlt style={{ color: 'gray' }} className="calendar-icon" />
        <p>16 Yanvar 2024</p>
        </div>
          <div className="right__clock">
          <FaClock style={{ color: 'gray' }} />
            <p>Saat 16:00</p>
          </div>
          <div className="right__map">
          <FaMapMarkerAlt style={{ color: 'gray',fontSize:"30px" }} className="calendar-icon" />
          <p>Nəriman Nərimanov rayonu, Bakı şəhəri, Azərbaycan</p>
          </div>
          <a className='traningbtn' href="">
          Qoşul
          </a>
       </div>
    </div>
<div className='moretraningsname' >
<h2 className='moretraningsnames'>Digər Təlimlər</h2>
<Traningcontainer/>
</div>
</Container>

        <Certifaciton/>
    </div>
    </PageContainer>
  )
}

export default Traningsid
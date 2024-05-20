import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/footericon/facebook.png"
import instagram from "../../assets/images/footericon/instagram.png"
import linkedn from "../../assets/images/footericon/linkedn.png"
import email from "../../assets/images/footericon/email.png"
import phone from "../../assets/images/footericon/phone.png"
const Footer = () => {
  return (
    <div id="footer">
        <Container>
           <div className="footer__container">
            <div className="footer__left">
<div className="footer__logo">
    <img src={logo} alt="" />
</div>
<div className="footers__lefttext">
Təhlükəsizliyin yeni nəsli!
</div>
<div className="footer__icon">
    <a href="">
    <img src={facebook} alt="" />
    </a>
    <a href="">
    <img src={instagram} alt="" />
    </a>
    <a href="">
    <img src={linkedn} alt="" />
    </a>
</div>
            </div>
            <div className="footer__center">
                <div className="footer__link">
                    <a className='linkcolor' href="">Ana Səhifə</a>
                    <a className='linkcolor' href="">Haqqımızda</a>
                    <a className='linkcolor' href="">Xidmətlər</a>
                    <a className='linkcolor' href="">Xəbərlər</a>
                    <a className='linkcolor' href="">Bloq</a>
                    <a className='linkcolor' href="">Təlimlər</a>
                </div>
            </div>
            <div className="footer__right">
<div className="footer__contact">

    <p className='contacttext'>Əlaqə</p>
    <div className="footer__contacticon">

    <div className="footer__mail">
        <img src={email} alt="" />
        <p>ngs.azerbaijan@gmail.com</p>
    </div>
    <div className="footer__phone">
        <img src={phone} alt="" />
        <p>+994 51 316 88 94</p>
    </div>
    </div>
</div>
<p className='footer__companyname'>© 2024 Sayt Binary School tərəfindən hazırlanmışdır.</p>
            </div>





           </div>
        </Container>












    </div>
  )
}

export default Footer
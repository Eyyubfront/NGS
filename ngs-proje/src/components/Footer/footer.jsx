import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import logo from "../../assets/images/logo.png"
const Footer = () => {
  return (
    <div id="footer">
        <Container>
           <div className="footer__top">
            <div className="footer__left">
<div className="footer__logo">
    <img src={logo} alt="" />
</div>
<div className="footers__lefttext">
Təhlükəsizliyin yeni nəsli!
</div>
            </div>
            <div className="footer__center"></div>
            <div className="footer__right">

            </div>
           </div>
        </Container>
    </div>
  )
}

export default Footer
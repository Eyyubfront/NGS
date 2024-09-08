import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import logo from "../../assets/images/ngs.png";
import facebook from "../../assets/images/footericon/facebook.png";
import instagram from "../../assets/images/footericon/instagram.png";
import linkedin from "../../assets/images/footericon/linkedn.png";
import email from "../../assets/images/footericon/email.png";
import phone from "../../assets/images/footericon/phone.png";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Link'i import edin

const Footer = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div id="footer">
            <Container>
                <div className="footer__container">
                    <div className="footer__top">
                        <div className="footer__left">
                            <div className="footer__logo">
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="footer__center">
                            <div className="footer__link">
                                <Link className='linkcolor' to="/">{t('Home')}</Link>
                                <Link className='linkcolor' to="/aboutus">{t('aboutUs')}</Link>
                                <Link className='linkcolor' to="/servicesection">{t('services')}</Link>
                                <Link className='linkcolor' to="/news">{t('news')}</Link>
                                <Link className='linkcolor' to="/blogs">{t('blog')}</Link>
                                <Link className='linkcolor' to="/traningpages">{t('trainings')}</Link>
                            </div>
                        </div>
                        <div className="footer__right">
                            <div className="footer__contact">
                                <div className="footer__contacticon">
                                    <div className="footer__mail">
                                        <img src={email} alt="Email Icon" />
                                        <p>ngs.azerbaijan@gmail.com</p>
                                    </div>
                                    <div className="footer__phone">
                                        <img src={phone} alt="Phone Icon" />
                                        <p>+994 51 316 88 94</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__icon">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

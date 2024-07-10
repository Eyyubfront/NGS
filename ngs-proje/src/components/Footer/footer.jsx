import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import logo from "../../assets/images/ngs.png";
import facebook from "../../assets/images/footericon/facebook.png";
import instagram from "../../assets/images/footericon/instagram.png";
import linkedin from "../../assets/images/footericon/linkedn.png";
import email from "../../assets/images/footericon/email.png";
import phone from "../../assets/images/footericon/phone.png";
import { useTranslation } from 'react-i18next';
import azTranslations from '../../locales/az/translation.json';
import enTranslations from '../../locales/en/translation.json';

const Footer = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => {
            const translations = lang === 'az' ? azTranslations : enTranslations;
            i18n.addResourceBundle(lang, 'translation', translations, true, true);
        });
    };

    return (
        <div id="footer">
            <Container>
                <div className="footer__container">
                    <div className="footer__top">
                        <div className="footer__left">
                            <div className="footer__logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="footer__center">
                            <div className="footer__link">
                                <a className='linkcolor' href="">{t('Home')}</a>
                                <a className='linkcolor' href="">{t('aboutUs')}</a>
                                <a className='linkcolor' href="">{t('services')}</a>
                                <a className='linkcolor' href="">{t('news')}</a>
                                <a className='linkcolor' href="">{t('blog')}</a>
                                <a className='linkcolor' href="">{t('trainings')}</a>
                            </div>
                        </div>
                        <div className="footer__right">
                            <div className="footer__contact">
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
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__icon">
                            <a href="">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;

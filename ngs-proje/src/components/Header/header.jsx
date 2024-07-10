import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ngs.png";
import Register from "../../pages/Registers/Register";
import search from "../../assets/images/search.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from 'react-i18next';
import azTranslations from '../../locales/az/translation.json';
import enTranslations from '../../locales/en/translation.json';

const Header = () => {
  const { t, i18n } = useTranslation(); 

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
  
    i18n.changeLanguage(selectedLang).then(() => {
      const translations = selectedLang === 'az' ? azTranslations : enTranslations;
      i18n.addResourceBundle(selectedLang, 'translation', translations, true, true);
    });
  };

  const hamburger = useRef();
  const searchInp = useRef();
  const logoRemover = useRef();
  const searchRemove = useRef();
  const searchBack = useRef();
  const headerScroll = useRef();

  useEffect(() => {
    // Load initial translations for default language ('az') on component mount
    i18n.addResourceBundle('az', 'translation', azTranslations, true, true);
  }, [i18n]);

  function openBtn() {
    hamburger.current.style.display = "flex";
  }

  function closeBtn() {
    hamburger.current.style.display = "none";
  }

  function openSearch() {
    searchInp.current.style.display = "block";
    logoRemover.current.style.display = "none";
    searchRemove.current.style.display = "none";
    searchBack.current.style.display = "block";
  }

  function closeSearch() {
    searchRemove.current.style.display = "block";
    logoRemover.current.style.display = "block";
    searchBack.current.style.display = "none";
    searchInp.current.style.display = "none";
  }

  const [navbar, setNavbar] = useState(false);

  const scroller = () => {
    setNavbar(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroller);
    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  const [pop, setPop] = useState(false);

  function togglePop() {
    setPop(!pop);
  }

  return (
    <Container>
      <div ref={headerScroll} className={navbar ? "header fixed" : "header"}>
        <div className="header__left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <input className="search__input" type="search" placeholder={t('searchPlaceholder')} ref={searchInp} />
        </div>
        <div className="header__right">
          <ul className="header__menu">
            <li>
              <Link className="link" to="/AboutUs">
                {t('aboutUs')}
              </Link>
            </li>
            <li>
              <Link className="link service" to="/servicesection">
                {t('services')}
                <ul className="sub__menu">
                  <li><Link to="/" className="sub__link">{t('documentPreparation')}</Link></li>
                  <li><Link to="/" className="sub__link">{t('systemInstallation')}</Link></li>
                  <li><Link to="/" className="sub__link">{t('audit')}</Link></li>
                  <li><Link to="/" className="sub__link">{t('repairConstruction')}</Link></li>
                  <li><Link to="/" className="sub__link">{t('cleaning')}</Link></li>
                  <li><Link to="/" className="sub__link">{t('otherServices')}</Link></li>
                </ul>
              </Link>
            </li>
            <li><Link className="link" to="/news">{t('news')}</Link></li>
            <li><Link className="link" to="/blogs">{t('blog')}</Link></li>
            <li><Link className="link" to="/traningpages">{t('trainings')}</Link></li>
            <li><Link className="link" to="/contact">{t('contact')}</Link></li>
          </ul>
          <select onChange={handleChangeLanguage} name="languages" className="language">
            <option value="az">{t('azerbaijani')}</option>
            <option value="en">{t('english')}</option>
          </select>
          <div className="login__btn">
            <button onClick={togglePop} type="button">{t('register')}</button>
          </div>
        </div>
        <button className="hamburger__open" onClick={openBtn}>
          <MenuIcon className="open__icon" />
        </button>
      </div>

      <div className="hamburger__container" ref={hamburger}>
        <div className="hamburger__head">
          <img ref={logoRemover} src={logo} alt="logo" />
          <div className="hamburger__right">
            <input type="search" ref={searchInp} className="hamburger__search" />
            <button onClick={openSearch}>
              <img src={search} ref={searchRemove} className="search__icon" alt="icon" />
            </button>
            <button onClick={closeSearch}>
              <CloseIcon ref={searchBack} className="close__search" />
            </button>
            <button onClick={closeBtn}>
              <CloseIcon className="close__icon" />
            </button>
          </div>
        </div>
        <ul className="hamburger__menu">
          <li><Link to="/AboutUs" className="hamburger__link">{t('aboutUs')}</Link></li>
          <li><Link to="/servicesection" className="hamburger__link">{t('services')}</Link></li>
          <li><Link to="/news" className="hamburger__link">{t('news')}</Link></li>
          <li><Link to="/blogs" className="hamburger__link">{t('blog')}</Link></li>
          <li><Link to="/traningpages" className="hamburger__link">{t('trainings')}</Link></li>
          <li><Link to="/contact" className="hamburger__link">{t('contact')}</Link></li>
          <li>
            <select onChange={handleChangeLanguage} name="languages" className="language">
              <option value="az">{t('azerbaijani')}</option>
              <option value="en">{t('english')}</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="register__container">
        {pop && <Register toggle={togglePop} />}
      </div>
    </Container>
  );
};

export default Header;

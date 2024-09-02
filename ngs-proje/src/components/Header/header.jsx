import React, { useRef, useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/ngs.png";
import Profil from "../../pages/Profil/Profil";
import search from "../../assets/images/search.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navbar, setNavbar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const hamburger = useRef(null);
  const searchInp = useRef(null);
  const logoRemover = useRef(null);
  const searchRemove = useRef(null);
  const searchBack = useRef(null);
  const headerScroll = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);

    const scroller = () => {
      setNavbar(window.scrollY >= 80);
    };

    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, []);

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('az');
    }

    const loadInitialTranslations = async () => {
      await i18n.loadLanguages(['az', 'en']);
    };
    loadInitialTranslations();
  }, [i18n]);

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    window.location.reload(); // Sayfayı yenile
    navigate('/');
};
  const openLogoutConfirm = () => {
    setLogoutConfirm(true);
  };

  const closeLogoutConfirm = () => {
    setLogoutConfirm(false);
  };

  const confirmLogout = () => {
    handleLogout();
    closeLogoutConfirm();
};

  const openBtn = () => {
    hamburger.current.style.display = "flex";
  };

  const closeBtn = () => {
    hamburger.current.style.display = "none";
  };

  const openSearch = () => {
    searchInp.current.style.display = "block";
    logoRemover.current.style.display = "none";
    searchRemove.current.style.display = "none";
    searchBack.current.style.display = "block";
  };

  const closeSearch = () => {
    searchRemove.current.style.display = "block";
    logoRemover.current.style.display = "block";
    searchBack.current.style.display = "none";
    searchInp.current.style.display = "none";
  };

  const getInitials = (email) => {
    if (!email) return '';
    return email.split(' ')[0].charAt(0).toUpperCase();
  };

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
            <li><Link className="link" to="/AboutUs">{t('aboutUs')}</Link></li>
            <li><Link className="link service" to="/servicesection">{t('services')}
              <ul className="sub__menu">
                <li><Link to="/" className="sub__link">{t('documentPreparation')}</Link></li>
                <li><Link to="/" className="sub__link">{t('systemInstallation')}</Link></li>
                <li><Link to="/" className="sub__link">{t('audit')}</Link></li>
                <li><Link to="/" className="sub__link">{t('repairConstruction')}</Link></li>
                <li><Link to="/" className="sub__link">{t('cleaning')}</Link></li>
                <li><Link to="/" className="sub__link">{t('otherServices')}</Link></li>
              </ul>
            </Link></li>
            <li><Link className="link" to="/news">{t('news')}</Link></li>
            <li><Link className="link" to="/blogs">{t('blog')}</Link></li>
            <li><Link className="link" to="/traningpages">{t('trainings')}</Link></li>
            <li><Link className="link" to="/contact">{t('contact')}</Link></li>
          </ul>
          <select onChange={handleChangeLanguage} value={i18n.language} name="languages" className="language">
            <option value="az">{t('az')}</option>
            <option value="en">{t('en')}</option>
          </select>
          <div className="login__btn">
            {currentUser ? (
              <div className="profile-btn">
                <div className="profile-pic" onClick={toggleProfile}>
                  {currentUser.profilePic ? (
                    <img src={currentUser.profilePic} alt="Profile" className="profile-pic-img" />
                  ) : (
                    <span className="profile-initial">{getInitials(currentUser.email)}</span>
                  )}
                </div>
                {profileOpen && (
                  <Profil user={currentUser} onClose={toggleProfile} onLogout={openLogoutConfirm} />
                )}
              </div>
            ) : (
              <button onClick={() => navigate('/register')} type="button">{t('register')}</button>
            )}
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
      <select onChange={handleChangeLanguage} value={i18n.language} name="languages" className="language">
        <option value="az">{t('az')}</option>
        <option value="en">{t('en')}</option>
      </select>
    </li>
  </ul>
  <div className="hamburger__login-btn">
    {currentUser ? (
      <div className="hamburger__profile-btn">
        <div className="hamburger__profile-pic" onClick={toggleProfile}>
          {currentUser.profilePic ? (
            <img src={currentUser.profilePic} alt="Profile" className="profile-pic-img" />
          ) : (
            <span className="profile-initial">{getInitials(currentUser.email)}</span>
          )}
        </div>
        {profileOpen && (
          <Profil user={currentUser} onClose={toggleProfile} onLogout={openLogoutConfirm} />
        )}
      </div>
    ) : (
      <button onClick={() => navigate('/register')} type="button">{t('register')}</button>
    )}
  </div>
  {logoutConfirm && (
    <>
      <div className="blur-background"></div>
      <div className="logout-confirm">
        <p>{t('areYouSureLogout')}</p>
        <button onClick={confirmLogout}>{t('logout')}</button>
        <button onClick={closeLogoutConfirm}>{t('cancel')}</button>
      </div>
    </>
  )}
</div>


{logoutConfirm && (
  <>
    <div className="blur-background"></div>
    <div className="logout-confirm">
      <p>{t('areYouSureLogout')}</p>
      <button onClick={confirmLogout}>{t('logout')}</button>
      <button onClick={closeLogoutConfirm}>{t('cancel')}</button>
    </div>
  </>
)}


    </Container>
  );
};

export default Header;

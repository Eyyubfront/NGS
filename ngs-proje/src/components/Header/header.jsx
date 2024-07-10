import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ngs.png";
import search from "../../assets/images/search.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Register from "../register/Register";

const Header = () => {
  const hamburger = useRef();
  const searchInp = useRef();
  const logoRemover = useRef();
  const searchRemove = useRef();
  const searchBack = useRef();
  const headerScroll = useRef();

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
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", scroller);

  // popup event start

  const [pop, setPop] = useState(false);

  function togglePop() {
    setPop(!pop);
  }

  // popup event end

  return (
    <Container>
      <div ref={headerScroll} className={navbar ? "header fixed" : "header"}>
        <div className="header__left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <input className="search__input" type="search" placeholder="Axtar" />
        </div>
        <div className="header__right">
          <ul>
            <Link className="link" to="/AboutUs">
              Haqqımızda
            </Link>
            <Link className="link service" to="/servicesection">
              Xidmətlər
              <ul className="sub__menu">
                <Link to="/" className="sub__link">
                  Sənədlərin hazırlanması
                </Link>
                <Link to="/" className="sub__link">
                  SƏTƏM İdarəetmə Sisteminin qurulması
                </Link>
                <Link to="/" className="sub__link">
                  Audit (təftiş) aparılması
                </Link>
                <Link to="/" className="sub__link">
                  Təmir və tikinti
                </Link>
                <Link to="/" className="sub__link">
                  Təmizlik
                </Link>
                <Link to="/" className="sub__link">
                  Digər Xidmətlər
                </Link>
              </ul>
            </Link>
            <Link className="link" to="/news">
              Xəbərlər
            </Link>
            <Link className="link" to="/blogs">
              Blog
            </Link>
            <Link className="link" to="/traningpages">
              Təlimlər
            </Link>
            <Link className="link" to="/contact">
              Əlaqə
            </Link>
          </ul>
          <select name="languages" id="lang">
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>
          <div className="login__btn">
            <button onClick={togglePop} type="button">
              Qeydiyyat
            </button>
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
            <input
              type="search"
              ref={searchInp}
              className="hamburger__search"
            />
            <button onClick={openSearch}>
              <img
                src={search}
                ref={searchRemove}
                className="search__icon"
                alt="icon"
              />
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
          <li>
            <Link to="/AboutUs" className="hamburger__link">
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to="/servicesection" className="hamburger__link">
              Xidmətlər
            </Link>
          </li>
          <li>
            <Link to="/news" className="hamburger__link">
              Xəbərlər
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hamburger__link">
              Bloq
            </Link>
          </li>
          <li>
            <Link to="/traningpages" className="hamburger__link">
              Təlimlər
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hamburger__link">
              Əlaqə
            </Link>
          </li>
          <li>
            <select name="languages" className="language">
              <option value="az">AZ</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="register__container">
        {pop ? <Register toggle={togglePop} /> : null}
      </div>
    </Container>
  );
};

export default Header;

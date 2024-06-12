import React, { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ngs.png";
import search from "../../assets/images/search.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const hamburger = useRef();
  const searchInp = useRef();
  const logoRemover = useRef();
  const searchRemove = useRef();
  const searchBack = useRef();

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
    searchBack.current.style.display = "block"
  }

  function closeSearch() {
    searchRemove.current.style.display = "block";
    logoRemover.current.style.display = "block";
    searchBack.current.style.display = "none";
    searchInp.current.style.display = "none";
  }

  return (
    <Container>
      <div id="header">
        <div className="header__left">
          <img src={logo} alt="logo" />
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
            <Link className="link" to="/">
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
            <Link to="/" className="hamburger__link">
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to="/" className="hamburger__link">
              Xidmətlər
            </Link>
          </li>
          <li>
            <Link to="/" className="hamburger__link">
              Xəbərlər
            </Link>
          </li>
          <li>
            <Link to="/" className="hamburger__link">
              Bloq
            </Link>
          </li>
          <li>
            <Link to="/" className="hamburger__link">
              Təlimlər
            </Link>
          </li>
          <li>
            <Link to="/" className="hamburger__link">
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
    </Container>
  );
};

export default Header;

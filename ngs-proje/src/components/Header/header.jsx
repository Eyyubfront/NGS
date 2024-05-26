import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
const Header = () => {
  return (
    <Container>
      <div id="header">
        <div className="header__left">
          <img src={logo} alt="logo" />
          <input className="search__input" type="search" placeholder="Axtar" />
        </div>
        <div className="header__right">
          <ul>
            <Link className="link" to="/">
              Haqqımızda
            </Link>
            <Link className="link service" to="/servicesection">
              Xidmətlər
              <ul className="sub__menu">
                <Link to="/" className="sub__link">Sənədlərin hazırlanması</Link>
                <Link to="/" className="sub__link">SƏTƏM İdarəetmə Sisteminin qurulması</Link>
                <Link to="/" className="sub__link">Audit (təftiş) aparılması</Link>
                <Link to="/" className="sub__link">Təmir və tikinti</Link>
                <Link to="/" className="sub__link">Təmizlik</Link>
                <Link to="/" className="sub__link">Digər Xidmətlər</Link>
              </ul>
            </Link>
            <Link className="link" to="/">
              Xəbərlər
            </Link>
            <Link className="link" to="/">
              Blog
            </Link>
            <Link className="link" to="/">
              Təlimlər
            </Link>
            <Link className="link" to="/">
              Əlaqə
            </Link>
          </ul>
          <select name="languages" id="lang">
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </Container>
  );
};

export default Header;

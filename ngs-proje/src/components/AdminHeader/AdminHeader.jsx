import React, { useState, useEffect } from "react";
import logo from "../../assets/images/ngs.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [user, setUser] = useState({ name: "", profilePic: "" });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    setUser({
      name: currentUser.name || "No Name",
      profilePic: currentUser.profilePic || "path/to/default/profile-pic.png", // varsayılan bir profil fotoğrafı yolu
    });
  }, []);

  // State to control the visibility of the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="admin__header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <input type="text" placeholder="Axtar" />
      <div className="user">
        <span>{user.name}</span>
        <Link to="/adminprof">
          <img src={user.profilePic} alt="Profile" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Conditional rendering of the menu */}
      {isMenuOpen && (
        <div className="menu">
          <div className="list">
            <ul>
              <li>
                <Link to="/adminnews">Xəbərlər</Link>
              </li>
              <li>
                <Link to="/adminblog">Bloq</Link>
              </li>
              <li>
                <Link to="/admintraning">Təlimlər</Link>
              </li>
              <li>
                <Link to="/adminformservice">Form Service</Link>
              </li>
              <li>
                <Link to="/appeal">Müraciətlər</Link>
              </li>
              <li>
                <Link>Statistika</Link>
              </li>
              <li>
                <Link to="/adminservices">Xidmetler</Link>
              </li>
              <li>
                <Link to="/admincertificate">Sertifikatlar</Link>
              </li>
              <li>
                <Link to="/adminabout">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;

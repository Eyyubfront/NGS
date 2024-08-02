import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/adminnews">Xəbərlər</Link>
          </li>
          <li>
            <Link>Bloq</Link>
          </li>
          <li>
            <Link to="/admintraning">Təlimlər</Link>
          </li>
          <li >
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
        </ul>
      </nav>
      <div className="sidebar__btn">
        <button className="logout">Çıxış</button>
      </div>
    </div>
  );
};

export default SideBar;

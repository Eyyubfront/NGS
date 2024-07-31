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
            <Link>Təlimlər</Link>
          </li>
<<<<<<< HEAD
          <li >
            <Link to="/adminformservice">Form Service</Link>
          </li>
=======
>>>>>>> 144009b97f644b3e2aad2d05a5bdcebb0f15d514
          <li>
            <Link to="/appeal">Müraciətlər</Link>
          </li>
          <li>
            <Link>Statistika</Link>
          </li>
<<<<<<< HEAD
          <li>
            <Link to="/adminservices">Xidmetler</Link>
          </li>
          <li>
            <Link to="/admincertificate">Sertifikatlar</Link>
          </li>
=======
>>>>>>> 144009b97f644b3e2aad2d05a5bdcebb0f15d514
        </ul>
      </nav>
      <div className="sidebar__btn">
        <button className="logout">Çıxış</button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SideBar;
=======
export default SideBar;
>>>>>>> 144009b97f644b3e2aad2d05a5bdcebb0f15d514

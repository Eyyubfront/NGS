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
          <li>
            <Link to="/appeal">Müraciətlər</Link>
          </li>
          <li>
            <Link>Statistika</Link>
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

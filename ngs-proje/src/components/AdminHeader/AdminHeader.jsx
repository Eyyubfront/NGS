import React from "react";
import logo from "../../assets/images/ngs.png";
import profpic from "../../assets/images/adminph/ellipse.png"
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="admin__header">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <input type="text" placeholder="Axtar" />
      <div className="user">
        <span>Emin H.</span>
        <Link to="/adminprof"><img src={profpic} alt="Profile" /></Link>
      </div>
    </div>
  );
};

export default AdminHeader;

import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import profpic from "../../assets/images/adminph/prof.png"

const Admin = () => {

  return (
    <div className="admin">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="profile-card">
          <div className="profile-picture">
            <img src={profpic} alt="Profile" />
          </div>
          <div className="profile-details">

            <div className="profile-item">
              <label>Adınız:</label>
              <span>Emin</span>
            </div>

            <div className="profile-item">
              <label>Soyadınız:</label>
              <span>Həsənov</span>
            </div>

            <div className="profile-item">
              <label>Elektron poçt:</label>
              <span>guys.spp@gmail.com</span>
            </div>

            <div className="profile-item">
              <label>Yazılarınız:</label>
              <span>12 ədəd</span>
            </div>

          </div>
          <button className="edit-button">Düzəliş edin</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
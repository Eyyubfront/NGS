import React, { useState, useEffect } from "react";
import logo from "../../assets/images/ngs.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [user, setUser] = useState({ name: '', profilePic: '' });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    setUser({
      name: currentUser.name || 'No Name',
      profilePic: currentUser.profilePic || 'path/to/default/profile-pic.png' // varsayılan bir profil fotoğrafı yolu
    });
  }, []);

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
    </div>
  );
};

export default AdminHeader;

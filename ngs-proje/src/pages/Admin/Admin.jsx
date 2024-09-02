import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import defaultPic from "../../assets/images/defaultprofilepic.jpg"; // Yer tutucu resim

const Admin = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      setEditedUser(currentUser);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('currentUser', JSON.stringify(editedUser));
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div className="admin">
      <AdminHeader />
      <div className="content__tab">
        <div className="left__bar">
          <SideBar />
        </div>
        <div className="profile-card">
          <div className="profile-picture">
            <img src={user.profilePic || defaultPic} alt="Profile" />
          </div>
          <div className="profile-details">
            <div className="profile-item">
              <label>Adınız:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedUser.name || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{user.name || "N/A"}</span>
              )}
            </div>
            <div className="profile-item">
              <label>Elektron poçt:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser.email || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{user.email || "N/A"}</span>
              )}
            </div>
            <div className="profile-item">
              <label>Password:</label>
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={editedUser.password || ""}
                  onChange={handleChange}
                />
              ) : (
                <span>{user.password || "N/A"}</span>
              )}
            </div>
          </div>
          {isEditing ? (
            <div className="edit-buttons">
              <button className="save-button" onClick={handleSave}>Kaydet</button>
              <button className="cancel-button" onClick={handleCancel}>İptal</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEdit}>Düzəliş edin</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

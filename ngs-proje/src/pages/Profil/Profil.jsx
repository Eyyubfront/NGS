import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa'; // trash ikonu ekleyelim

const Profil = ({ onClose, onLogout }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || {});
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState(user.password || '');
  const [profilePic, setProfilePic] = useState(user.profilePic || '');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
      setPassword(currentUser.password || '');
      setProfilePic(currentUser.profilePic || '');
    }
  }, []);

  useEffect(() => {
    if (!profilePic && email) {
      setProfilePic(`https://via.placeholder.com/150?text=${email[0].toUpperCase()}`);
    }
  }, [email, profilePic]);

  const handleSave = () => {
    const updatedUser = { name, email, password, profilePic };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser); // Kullanıcıyı güncelle
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePic = () => {
    setProfilePic(null);
  };

  return (
    <div className="profile-popup">
      <button onClick={onClose} className="close-popup">X</button>
      <div className="profile-pic-container">
        <div className=" imgtrash">
          <img
            src={profilePic || `https://via.placeholder.com/150?text=${email[0].toUpperCase()}`}
            alt="Profile"
            className="hamburger__profile-pic-img  profile-pic"
          />
          <button onClick={handleRemoveProfilePic} className="remove-pic-btn">
            <FaTrash /> {/* Trash ikonu */}
          </button>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />
      </div>
      <div className="profile-details">
        <label>{t('nameprofil')}</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>{t('email')}</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>{t('password')}</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className="savelogoutbtn">
        <button onClick={handleSave} className="save-btn">{t('save')}</button>
        <button onClick={onLogout} className="logout-btn">{t('logout')}</button>
      </div>
    </div>
  );
};

export default Profil;

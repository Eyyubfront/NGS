import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Bütün sahələri doldurun");
      return;
    }
  
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    const user = registeredUsers.find(user => user.email === email && user.password === password);
  
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate("/");
    } else {
      setErrorMessage("Giriş bilgileri hatalı.");
    }
  };
  
  const handleClose = () => {
    navigate("/"); // Kapatma butonuna tıklandığında anasayfaya yönlendir
  };

  return (
    <div className="logins">
      <div className="login__box">
        <button className="close-btn" onClick={handleClose}>
          <FaTimes />
        </button>
        <h3>{t("logins")}</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Elektron Poçt"
            required
          />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parola"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit">Giriş Yap</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <div className="register-redirect">
          <p>Qeydiyyatdan keçmək üçün <a href="/register">buraya</a> tıklayın.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

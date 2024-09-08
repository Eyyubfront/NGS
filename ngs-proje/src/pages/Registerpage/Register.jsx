import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const simpleEmails = ['e@gmail.com', 'test@example.com'];
    return emailRegex.test(email) && !simpleEmails.includes(email.toLowerCase());
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password) && !/\d{4}-\d{2}-\d{2}/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage(t("emptyFields"));
      return;
    }

    if (!validateEmail(email)) {
      setEmailErrorMessage(t("invalidEmail"));
      return;
    }

    if (!validatePassword(password)) {
      setPasswordErrorMessage(t("invalidPassword"));
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = registeredUsers.some(user => user.email === email && user.password === password);

    if (userExists) {
      setErrorMessage(t("alreadyRegistered"));
      return;
    }

    const userData = { name, email, password };
    registeredUsers.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    setName("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setIsRegistered(true);
  };

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        setIsRegistered(false);
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  return (
    <div>
      {isRegistered && (
        <div className="success-bar">
          <div className="success-bar-content">{t("registrationSuccess")}</div>
        </div>
      )}
      <div id="register">
        <div className="register__box">
          <button
            type="button"
            className="close-btn"
            onClick={() => navigate(-1)}
            aria-label={t("closeButtonAriaLabel")}
            style={{ position: 'absolute', background: "transparent", color: "black", zIndex: "99999", top: '10px', right: '10px', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          >
            <FaTimes />
          </button>
          <h3>{t("register")}</h3>
          <p className="register__p">
            {t("enterDetails")}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
            />
            {emailErrorMessage && <p style={{ color: "red" }}>{emailErrorMessage}</p>}
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("passwordPlaceholder")}
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
            {passwordErrorMessage && <p style={{ color: "red" }}>{passwordErrorMessage}</p>}
            <button type="submit">{t("registerButton")}</button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
          <div className="acountwithpage">
            <p style={{ marginTop: "10px" }} dangerouslySetInnerHTML={{ __html: t("accountExists") }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

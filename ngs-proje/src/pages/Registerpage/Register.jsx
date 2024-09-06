import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

//     console.log('Google Login Success:', response);

//     // Google Login yanıtını işleme
//     const profile = response?.profileObj;
// console.log(profile);
//     if (profile) {
//       // Kullanıcı verilerini localStorage’a kaydet
//       const userData = {
//         name: profile.name || '',
//         email: profile.email || '',
//         password: '', // Google ile şifre alınamaz, bu boş bırakılabilir
//         profilePic: profile.picture || ''
//       };
//       localStorage.setItem('currentUser', JSON.stringify(userData));

//       // Ana sayfaya yönlendir
//       navigate("/");
//     } else {
//       setErrorMessage("Google ile giriş yapılamadı.");
//     }
//   };

//   const handleGoogleLoginFailure = (error) => {
//     console.log('Google Login Error:', error);
//     if (error.error === 'popup_closed_by_user') {
//       setErrorMessage("Giriş penceresi kapatıldı. Lütfen tekrar deneyin.");
//     } else {
//       setErrorMessage("Google ile giriş başarısız oldu. Lütfen tekrar deneyin.");
//     }
//   };

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
      setErrorMessage("Bütün sahələri doldurun");
      return;
    }

    if (!validateEmail(email)) {
      setEmailErrorMessage("Etibarlı və təhlükəsiz e-poçt ünvanı daxil edin.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordErrorMessage("Parolanız en az 8 karakter uzunluğunda ve bir simvol içermelidir");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = registeredUsers.some(user => user.email === email && user.password === password);

    if (userExists) {
      setErrorMessage("Siz artıq qeydiyyatdan keçmisiniz.");
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
          <div className="success-bar-content">Kayıt başarılı!</div>
        </div>
      )}
      <div id="register">
        <div className="register__box">
          <button
            type="button"
            className="close-btn"
            onClick={() => navigate(-1)}
            style={{ position: 'absolute', background: "transparent", color: "black", zIndex: "99999", top: '10px', right: '10px', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          >
            <FaTimes />
          </button>
          <h3>Qeydiyyatdan keç</h3>
          <p className="register__p">
            Zəhmət olmasa məlumatlarınızı xanalara doldurun
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ad/Soyad"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Elektron Poçt"
              required
            />
            {emailErrorMessage && <p style={{ color: "red" }}>{emailErrorMessage}</p>}
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
            {passwordErrorMessage && <p style={{ color: "red" }}>{passwordErrorMessage}</p>}
            <button type="submit">Qeyd ol</button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
          <div className="acountwithpage">
            <p style={{ marginTop: "10px" }}>
              Hesabınız var mı? <a href="/login" style={{ color: "#009ee2" }}>Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

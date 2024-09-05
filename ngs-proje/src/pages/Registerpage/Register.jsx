import React, { useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // react-icons'dan göz ikonları
import { FaTimes } from 'react-icons/fa'; // X butonu için ikon

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

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
    const profile = response.profileObj;
    if (profile) {
      localStorage.setItem('currentUser', JSON.stringify(profile));
      navigate("/");
    } else {
      setErrorMessage("Google ile giriş yapılamadı.");
    }
  };
  
  const handleGoogleLoginFailure = (error) => {
    console.log('Google Login Error:', error);
    if (error.error === 'popup_closed_by_user') {
      setErrorMessage("Giriş penceresi kapatıldı. Lütfen tekrar deneyin.");
    } else {
      setErrorMessage("Google ile giriş başarısız oldu. Lütfen tekrar deneyin.");
    }
  };
  
  

  const validateEmail = (email) => {
    // E-posta formatını doğrulama ve sık kullanılan basit e-posta adreslerini engelleme
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const simpleEmails = ['e@gmail.com', 'test@example.com'];
    return emailRegex.test(email) && !simpleEmails.includes(email.toLowerCase());
  };

  const validatePassword = (password) => {
    // Parola kuralları: minimum 8 karakter, en az bir simvol
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password) && !/\d{4}-\d{2}-\d{2}/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Boş alan kontrolü
    if (!name || !email || !password) {
      setErrorMessage("Bütün sahələri doldurun");
      return;
    }

    // E-posta ve şifre doğrulama
    if (!validateEmail(email)) {
      setEmailErrorMessage("Etibarlı və təhlükəsiz e-poçt ünvanı daxil edin..");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordErrorMessage("Parolanız en az 8 karakter uzunluğunda ve bir simvol içermelidir");
      return;
    }

    // Kullanıcıların verilerini al
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Aynı e-posta ve şifre kombinasyonunu kontrol et
    const userExists = registeredUsers.some(user => user.email === email && user.password === password);

    if (userExists) {
      setErrorMessage("Siz artıq qeydiyyatdan keçmisiniz.");
      return;
    }

    const userData = { name, email, password };
    registeredUsers.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers)); // Kullanıcıyı kaydet

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
      // success-bar için animasyon etkisini vermek için küçük bir gecikme ekle
      const timer = setTimeout(() => {
        setIsRegistered(false); // Kayıt tamamlandıktan sonra success-bar'ı gizle
        navigate("/login"); // Kayıt tamamlandıktan sonra giriş sayfasına yönlendir
      }, 3000); // 3 saniye gösterildikten sonra gizle

      return () => clearTimeout(timer); // Temizleme işlemi
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
          <GoogleLogin
  clientId="618729088572-qt1u18e9njh3aqdqm356mvhb8m5u3h9l.apps.googleusercontent.com"
  buttonText="Google ile Giriş Yap"
  onSuccess={handleGoogleLoginSuccess}
  onError={handleGoogleLoginFailure}
  cookiePolicy={'single_host_origin'}
/>

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

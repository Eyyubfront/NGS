import React, { useRef, useState } from "react";
import axios from "axios";
import leisure from "../../assets/images/register/leisure.png"
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Qeydiyyat tamamlandıqda istifadə olunacaq state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number) {
      setErrorMessage("Bütün sahələri doldurun");
      return;
    }

    const userData = {
      name,
      email,
      number,
    };

    const token = "api__token";

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setName("");
      setEmail("");
      setNumber("");
      setErrorMessage("");
      setIsRegistered(true); // Qeydiyyat tamamlandıqda state yenilənir
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // close popup start

  const cancel = useRef();

  function exitWindow() {
    if (cancel.current) {
      cancel.current.style.display = "none";
    }
  }

  //   close popup end

  // success popup start

  const cancelSuccess = useRef();

  function exitSuccess() {
    if (cancelSuccess.current) {
      cancelSuccess.current.style.display = "none";
    }
  }

  // success popup start

  return (
    <div>
      {!isRegistered ? (
        <div id="register" ref={cancel}>
          <div className="register__box">
            <div className="exit__btn">
              <button onClick={exitWindow}>X</button>
            </div>
            <h3>Giriş</h3>
            <p className="register__p">
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus
              porta tristique nunc pretium.
            </p>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ad/Soyad"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Elektron Poçt"
              />
              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Telefon"
              />
              <button type="submit">Qeyd ol</button>
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      ) : (
        <div className="succes" ref={cancelSuccess}>
          <div className="success__box">
            
            <img src={leisure} alt="le" />
            <h3>Qeydiyyat uğurla tamamlandı</h3>
            <p>
              Müraciətiniz komandamıza göndərilmişdir, tezliklə sizinlə əlaqə
              saxlanılacaq. Təşəkkürlər!
            </p>
            <div className="exit__btn">
              <button onClick={exitSuccess}>Bağla</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

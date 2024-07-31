import React, { useState } from 'react';
import homeservis from "../../assets/images/homephoto/homeservis.png";
import Container from 'react-bootstrap/esm/Container';
const HomeServis = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCity: '',
    title: '',
    subject: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini sadece console'a yazdırıyoruz, API isteği yapmıyoruz
    console.log('Form Verileri:', formData);

    // Form verilerini localStorage'da saklıyoruz
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div id='homeservice'>
      <Container>
        <div className="homeservice__container">
          <div className="homeservice__left">
            <div className="homeservice__top">
              <p className='homeservicename'>Xidmətlə bağlı müraciət edin.</p>
              <div className="homeservicetext">
                Xidmətlərimizdən istifadə etmək və bizimlə əməkdaşlıq üçün elə indi müraciət edə bilərsiniz.
              </div>
              <form onSubmit={handleSubmit}>
                <div className="homeservice__input">
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Ad/Soyad'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="email"
                    placeholder='Elektron Poçt'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Ölkə/Şəhər'
                    name='countryCity'
                    value={formData.countryCity}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Başlıq'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputsmesage'
                    type="text"
                    placeholder='Mövzu'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="homeservice__button">
                  <button type="submit" className='servicelinkhref'>
                    <p className='sendhomeservicebtn'>
                      Göndər
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="homeservice__right">
            <img className='homeservicephoto' src={homeservis} alt="Home Service" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeServis;

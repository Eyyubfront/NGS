import React, { useState } from 'react';
import axios from 'axios';
import homeservis from "../../assets/images/homephoto/homeservis.png";
import Container from 'react-bootstrap/esm/Container';

const HomeServis = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('https://ngs-794fc9210221.herokuapp.com/api/formData')
      .then(response => {
        const data = response.data;
        const isValid = data.some(item =>
          item.firstName === formData.firstName &&
          item.lastName === formData.lastName &&
          item.email === formData.email &&
          item.country === formData.country &&
          item.city === formData.city &&
          item.subject === formData.subject &&
          item.message === formData.message
        );

        if (isValid) {
          alert('Veriler doğru!');
        } else {
          alert('Veriler yanlış!');
        }
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
        alert('Bir hata oluştu!');
      });
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
                    placeholder='Ad'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Soyad'
                    name='lastName'
                    value={formData.lastName}
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
                    placeholder='Ölkə'
                    name='country'
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Şəhər'
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <input
                    className='homeservicinputs'
                    type="text"
                    placeholder='Başlıq'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <textarea
                    className='homeservicinputsmesage'
                    placeholder='Mesaj'
                    name='message'
                    value={formData.message}
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

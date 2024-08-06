import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/PageContainer';
import HomeServis from '../../components/Homeservice/Homeservice';
import { Container } from '@mui/material';

const Contact = () => {
  const [contact, setContact] = useState(null);

  const handleGetContact = async () => {
    try {
      const response = await axios.get("https://ngs-794fc9210221.herokuapp.com/api/contacts");
      console.log("API Response:", response.data);
      setContact(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleGetContact();
  }, []);

  if (!contact) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <>
      <PageContainer>
        <Container>
          <div id="contact">
            <div className="contact__container">
              <div className="contact__top">
                <div className="contact__topname">Əlaqə</div>
              </div>
              <div className="contact__buttom">
                <div className="contact__left">
                  <div className="conatct__phone">
                    <h5 className='contactkindname'>Telefon</h5>
                    <p className='contactkinds'>{contact.phone}</p>
                  </div>
                  <div className="conatct__mail">
                    <h5 className='contactkindname'>Elektron poçt</h5>
                    <p className='contactkinds'>{contact.email}</p>
                  </div>
                  <div className="conatct__watch">
                    <h5 className='contactkindname'>İş saatları</h5>
                    <p className='contactkinds'>{contact.hours}</p>
                  </div>
                  <div className="conatct__location">
                    <h5 className='contactkindname'>Ünvan</h5>
                    <p className='contactkinds'>{contact.address}</p>
                  </div>
                </div>
                <div className="contact__right">
                  <div style={{ width: '100%' }}>
                    <iframe
                      width="100%"
                      height="400"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Baku,Azerbaijan+(Guys%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HomeServis />
        </Container>
      </PageContainer>
    </>
  );
};

export default Contact;

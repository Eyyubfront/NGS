import React, { useState } from 'react';
import axios from 'axios';
import poperorr from "../../assets/images/certification/poperorr.png";
import popsucses from "../../assets/images/certification/popsucses.png";
import popsend from "../../assets/images/certification/pushsend.png";

const Cerfitacion = () => {
  const [isPopupSend, setIsPopupSend] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupEror, setIsPopupEror] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setIsPopupSend(true);
    setTimeout(() => {
      // Make an API call to check the certificate ID
      checkCertificateId(certificateId);
    }, 2000); // Show the send pop-up for 2 seconds
  };

  const checkCertificateId = (id) => {
    axios.get(`https://ngs-794fc9210221.herokuapp.com/api/certificates/get-certificate/${id}`)
      .then(response => {
        const data = response.data;
        setIsPopupSend(false);
        if (data) {
          setMessage(`Bu sertifikat ${data.owner} adlı şəxsə məxsusdur.`); // Use owner here
          setIsPopupVisible(true);
        } else {
          setIsPopupEror(true);
        }
      })
      .catch(error => {
        setIsPopupSend(false);
        setIsPopupEror(true);
      });
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setIsPopupEror(false);
    setIsPopupSend(false);
  };

  return (
    <div id='cerfitacion'>
      <div className="cerfitacion__container">
        <div className="certifacion__top">
          <h3>Sertifikatınızı yoxlayın:</h3>
        </div>
        <div className="certifacion__buttom">
          <input
            className='certifacnumber'
            type="text"
            placeholder='Sertifikatın nömrəsi'
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <button className='certifactcheck' onClick={handleButtonClick}>
            Yoxla
          </button>
        </div>
      </div>
      {isPopupSend && (
        <div className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={closePopup}>&times;</span>
            <div className="pop__container">
              <div className="pop__left">
                <h2 className='popleftext'>Uğurla göndərildi.</h2>
                <p className='popcontainertext'>Müraciətiniz komandamıza göndərilmişdir, tezliklə sizinlə əlaqə saxlanılacaq. Təşəkkürlər!</p>
                <button className='popbtn' onClick={closePopup}>Bağla</button>
              </div>
              <div className="pop__right">
                <img src={popsend} alt="Send" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={closePopup}>&times;</span>
            <div className="pop__container">
              <div className="pop__left">
                <h2 className='popcontainertext'>
                  {message}
                </h2>
                <button className='popbtn' onClick={closePopup}>Bağla</button>
              </div>
              <div className="pop__right">
                <img src={popsucses} alt="Success" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isPopupEror && (
        <div className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={closePopup}>&times;</span>
            <div className="pop__container">
              <div className="pop__left">
                <h2 className='popleftext'>Axtardığınız sertifikat mövcud deyil.</h2>
            
                <button className='popbtn' onClick={closePopup}>Bağla</button>
              </div>
              <div className="pop__right">
                <img src={poperorr} alt="Error" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cerfitacion;

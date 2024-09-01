import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // i18next kancasını ekleyin
import poperorr from "../../assets/images/certification/poperorr.png";
import popsucses from "../../assets/images/certification/popsucses.png";
import popsend from "../../assets/images/certification/pushsend.png";

const Cerfitacion = () => {
  const { t } = useTranslation(); // Çeviriyi kullanmak için kancayı çağırın
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
          setMessage(t('popupSuccessMessage', { owner: data.owner })); // Use translation here
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
          <h3>{t('checkCertificate')}</h3> {/* Çeviri kullanımı */}
        </div>
        <div className="certifacion__buttom">
          <input
            className='certifacnumber'
            type="text"
            placeholder={t('certificateNumberPlaceholder')} 
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <button className='certifactcheck' onClick={handleButtonClick}>
            {t('checkButton')} {/* Çeviri kullanımı */}
          </button>
        </div>
      </div>
      {isPopupSend && (
        <div className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={closePopup}>&times;</span>
            <div className="pop__container">
              <div className="pop__left">
                <h2 className='popleftext'>{t('popupSendTitle')}</h2> {/* Çeviri kullanımı */}
                <p className='popcontainertext'>{t('popupSendMessage')}</p> {/* Çeviri kullanımı */}
                <button className='popbtn' onClick={closePopup}>{t('closeButton')}</button> {/* Çeviri kullanımı */}
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
                <button className='popbtn' onClick={closePopup}>{t('closeButton')}</button> {/* Çeviri kullanımı */}
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
                <h2 className='popleftext'>{t('popupErrorTitle')}</h2> {/* Çeviri kullanımı */}
                <button className='popbtn' onClick={closePopup}>{t('closeButton')}</button> {/* Çeviri kullanımı */}
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

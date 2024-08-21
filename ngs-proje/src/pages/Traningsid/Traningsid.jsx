import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Certifaciton from '../../components/Certifaciton/cerfitacion';
import Traningcontainer from '../../components/Traningcontainer/Traningcontainer';
import { Container } from '@mui/material';
import traningidphoto from '../../assets/images/traningid/traningid.png';
import PageContainer from '../../components/PageContainer';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Traningsid = () => {
  const [eventData, setEventData] = useState(null);
  const { id } = useParams(); // URL'den id parametresini al
  const { t } = useTranslation(); // Çeviri hook'u

  useEffect(() => {
    // Veriyi çekmek için GET isteği
    axios.get(`https://ngs-794fc9210221.herokuapp.com/api/events/${id}`)
      .then(response => {
        setEventData(response.data);
      })
      .catch(error => {
        console.error('Veri çekme hatası:', error);
      });
  }, [id]);

  if (!eventData) {
    return <div>{t('loading')}</div>;
  }

  // Tarih ve saati formatlamak için helper fonksiyonlar
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD formatı
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[1].split('.')[0]; // HH:MM:SS formatı
  };

  return (
    <PageContainer>
      <div id='Traningsid'>
        <Container>
          <div className="traningid__top">
            <img className='traningidphoto' src={traningidphoto} alt="Training" />
          </div>
          <div className="traningid__center">
            <div className="traningid__left">
              <h2 className='traningidsnames'>{eventData.name}</h2>
              <p className='traningidsname'>{eventData.description}</p>
            </div>
            <div className="rightline"></div>
            <div className="traningid__right">
              <div className="right__date">
                <FaCalendarAlt style={{ color: 'gray' }} className="calendar-icon" />
                <p>{formatDate(eventData.date)}</p>
              </div>
              <div className="right__clock">
                <FaClock style={{ color: 'gray' }} />
                <p>{formatTime(eventData.date)}</p>
              </div>
              <div className="right__map">
                <FaMapMarkerAlt style={{ color: 'gray', fontSize: "18px" }} className="calendar-icon" />
                <p>{eventData.location || t('locationNotSpecified')}</p>
              </div>
              <a className='traningbtn' href="">
                {t('join')}
              </a>
            </div>
          </div>
          <div className='moretraningsname'>
            <h2 className='moretraningsnames'>{t('moreTrainings')}</h2>
            <Traningcontainer />
          </div>
        </Container>
        <Certifaciton />
      </div>
    </PageContainer>
  );
};

export default Traningsid;

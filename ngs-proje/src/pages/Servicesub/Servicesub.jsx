import React, { useState, useEffect } from 'react';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import { Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

// Base64 resim türünü belirleyen yardımcı fonksiyon
const getImageType = (base64String) => {
  if (!base64String) return null;
  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : null;
};

const Servicesub = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();

  const items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
    'item13',
    'item14',
  ];

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://ngs-794fc9210221.herokuapp.com/api/services/${id}`)
      .then(response => {
        setService(response.data);
      })
      .catch(error => {
        console.error("Error fetching service data: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const handleItemClick = (index) => {
    navigate(`/servicessub/${id}`, { state: { itemIndex: index, itemName: t(items[index]) } });
  };

  if (loading) return <p>{t('loading')}</p>;
  if (!service) return <p>{t('serviceNotFound')}</p>;

  return (
    <PageContainer>
      <div id="servicesub">
        <div className="servicesub__top">
          {service.icon && (
            <img
              className='servicesubphoto'
              src={`data:image/${getImageType(service.icon)};base64,${service.icon}`}
              alt={service.name}
            />
          )}
          <div className="servicesubhoots__text">
            <h2 className='servicesubnames'>{service.name}</h2>
            <p className='servicesubreportext'>
              {service.description}
            </p>
          </div>
        </div>
        <Container>
          <div className="servicesub__buttom">
            <div className='listboxes'>
              <ul className='listdata'>
                {items.map((item, index) => (
                  <li key={index}>
                    <div className="list subs">
                      {t(item)}
                      <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleItemClick(index)}
                      >
                        <IoIosArrowForward />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
        <Cerfitacion />
      </div>
    </PageContainer>
  );
};

export default Servicesub;

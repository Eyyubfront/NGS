import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const dataUrl = "https://ngs-794fc9210221.herokuapp.com/api/services";

// Base64 resim türünü belirleyen yardımcı fonksiyon
const getImageType = (base64String) => {
  if (!base64String) return null;
  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : null;
};

const Servicesections = ({ showDescription = true }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(dataUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container>
      <div id='servicesection'>
        <div className="pageservice__container">
          <p className='pageservicenames'>{t('services')}</p>
          {showDescription && (
            <p className='pageservicenamesbutom'>
              Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.
            </p>
          )}
          <div className="pageservice__top">
            {data.length === 0 ? (
              <p>Loading...</p>
            ) : (
              data.map(service => (
                <Link key={service.id} to={`/servicesection/${service.id}`}>
                  <div
                    className={`pageservice__card pageservice__card${service.id}`}
                    style={{
                      backgroundImage: service.icon
                        ? `url(data:image/${getImageType(service.icon)};base64,${service.icon})`
                        : 'none',
                      backgroundSize: 'cover',
                      width: "287px",
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="card__text">
                      <p>{service.name}</p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Servicesections;

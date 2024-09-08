import React, { useState, useEffect } from 'react';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import HomeServis from '../../components/Homeservice/Homeservice';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Servicesections from '../../components/Servicesections/Servicesections';

// Base64 resim türünü belirleyen yardımcı fonksiyon
const getImageType = (base64String) => {
  if (!base64String) return null;
  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : null;
};

const Servicesubinfo = () => {
  const { id } = useParams(); // URL'den id'yi al
  const location = useLocation();  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`https://ngs-794fc9210221.herokuapp.com/api/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service data: ", error);
        setError("Service not found");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageContainer>
      <div id="servicesubinfo">
        <div className="servicesubinfo__top">
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
        <Servicesections/>
        <HomeServis />
        <Cerfitacion />
      </div>
    </PageContainer>
  );
};

export default Servicesubinfo;

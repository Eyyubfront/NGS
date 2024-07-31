<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import axios from 'axios';

const getImageType = (base64String) => {
  if (!base64String) return null;

  const mimeTypeMatch = base64String.match(/^data:image\/(.*?);base64,/);
  if (mimeTypeMatch && mimeTypeMatch[1]) {
    return mimeTypeMatch[1]; // Return the extension (e.g., 'png', 'jpeg')
  }
  return null; // Return null if no extension is found
};

const dataUrl = "https://ngs-794fc9210221.herokuapp.com/api/services";
const deleteUrl = "https://ngs-794fc9210221.herokuapp.com/api/services/";

const Servicesections = ({ showDescription = true }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(dataUrl)
      .then((response) => {
        console.log("GET response data: ", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const deleteAllData = () => {
    const deletePromises = data.map((service) =>
      axios.delete(`${deleteUrl}${service.id}`)
    );

    Promise.all(deletePromises)
      .then(() => {
        console.log("All old data deleted");
        fetchData(); // Fetch data again after deletion
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <div id='servicesection'>
        <div className="pageservice__container">
          <p className='pageservicenames'>Xidmətlərimiz</p>
          {showDescription && (
            <p className='pageservicenamesbutom'>Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.</p>
          )}
          <Button variant="contained" color="secondary" onClick={deleteAllData}>
            Tüm Verileri Sil
          </Button>
          <div className="pageservice__top">
            {data.slice(0, 3).map(service => (
              <Link key={service.id} to={`/servicesection/${service.id}`}>
                <div
                  className={`pageservice__card pageservice__card${service.id}`}
                  style={{
                    backgroundImage: service.icon
                      ? `url(data:image/${getImageType(service.icon)};base64,${service.icon})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="card__text">
                    <p>{service.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pageservice__bottom">
            {data.slice(3).map(service => (
              <Link key={service.id} to={`/servicesection/${service.id}`}>
                <div
                  className={`pageservice__card pageservice__card${service.id}`}
                  style={{
                    backgroundImage: service.icon
                      ? `url(data:image/${getImageType(service.icon)};base64,${service.icon})`
                      : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="card__text">
                    <p>{service.name}</p>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import { Container } from '@mui/material';

import axios from 'axios';
import { useEffect } from 'react';

const Servicesections = ({ showDescription = true }) => {
const [services,setServices] = useState()

const  handleGetServices = async()=>{
await axios.get("https://ngs-794fc9210221.herokuapp.com/api/services")
.then(response => {
  console.log(response.data)
  setServices(response.data)
})
}


useEffect(() => {
  handleGetServices()
}, [])




  return (
    <>
    <div>

      <Container>
        <div id='servicesection'>
          <div className="pageservice__container">
            <p className='pageservicenames'>Xidmətlərimiz</p>
            {showDescription && (
              <p className='pageservicenamesbutom'>Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.</p>
            )}
            <div className="pageservice__top">
              {services?.slice(0,3).map(service => (
                <Link key={service.id} to={`/servicesection/${service.id}`}>
                  <div
                    className={`pageservice__card pageservice__card${service.id}`}
                    style={{ backgroundImage: `url(${service?.image})` }}
                  >
                    <div className="card__text">
                      <p>{service.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="pageservice__bottom">
              {services?.slice(3).map(service => (
                <Link key={service.id} to={`/servicesection/${service.id}`}>
                  <div
                    className={`pageservice__card pageservice__card${service.id}`}
                    style={{ backgroundImage: `url(${service?.image})` }}
                  >
                    <div className="card__text">
                      <p>{service.text}</p>
                    </div>
>>>>>>> Stashed changes
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Servicesections;

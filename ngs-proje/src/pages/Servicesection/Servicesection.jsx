import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import { Container } from '@mui/material';
import pageserviceone from "../../assets/images/homephoto/pageserviceone.png";
import pageservicetwo from "../../assets/images/homephoto/pageservicetwo.png";
import pageservicethree from "../../assets/images/homephoto/pageservicethree.png";
import pageservicefoor from "../../assets/images/homephoto/pageservicefoor.png";
import pageservicefive from "../../assets/images/homephoto/pageservicefive.png";
import pageservicesix from "../../assets/images/homephoto/pageservicesix.png";

const Servicesection = () => {
  const servicesection = [
    { id: 1, text: 'Sənədlərin hazırlanması', image: pageserviceone },
    { id: 2, text: 'SƏTƏM İdarəetmə Sisteminin qurulması', image: pageservicetwo },
    { id: 3, text: 'Audit (təftiş) aparılması', image: pageservicethree },
    { id: 4, text: 'Təmir və tikinti', image: pageservicefoor },
    { id: 5, text: 'Təmizlik', image: pageservicefive },
    { id: 6, text: 'Digər xidmətlər', image: pageservicesix },
  ];

  return (
    <PageContainer>
      <Container>
        <div id='servicesection'>
          <div className="pageservice__container">
            <p className='pageservicenames'>Xidmətlərimiz</p>
            <p className='pageservicenamesbutom'>Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.</p>
            <div className="pageservice__top">
              {servicesection.slice(0, 3).map(service => (
                <Link key={service.id} to={`/servicesection/${service.id}`}>
                  <div
                    className={`pageservice__card pageservice__card${service.id}`}
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="card__text">
                      <p>{service.text}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="pageservice__bottom">
              {servicesection.slice(3).map(service => (
                <Link key={service.id} to={`/servicesection/${service.id}`}>
                  <div
                    className={`pageservice__card pageservice__card${service.id}`}
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="card__text">
                      <p>{service.text}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Cerfitacion />
    </PageContainer>
  );
};

export default Servicesection;

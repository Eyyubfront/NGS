import React from 'react';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import HomeServis from '../../components/Homeservice/Homeservice';
import servicesub from "../../assets/images/servicesub/subsservice.png";
import Servicesections from '../../components/Servicesections/Servicesections';
import { useLocation, useParams } from 'react-router-dom';

const Servicesubinfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const { itemIndex, itemName } = location.state || {};

  return (
    <>
      <PageContainer>
        <div id="servicesubinfo">
          <div className="servicesubinfo__top">
            <img className='servicesubphoto' src={servicesub} alt="" />
            <div className="servicesubhoots__text">
              <h2 className='servicesubnames'>Təlimlər, tədbir və elanlar</h2>
              <p className='servicesubreportext'>
                Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.
              </p>
              {itemName && (
                <div className="selected-item-info">
                  <h3></h3>
                  <p>{itemName}</p>
                </div>
              )}
              <div className="selected-item-id">
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
          <Servicesections />
          <HomeServis />
          <Cerfitacion />
        </div>
      </PageContainer>
    </>
  );
}

export default Servicesubinfo;

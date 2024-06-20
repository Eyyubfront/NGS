import React from 'react';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import servicesub from "../../assets/images/servicesub/subsservice.png";
import { IoIosArrowForward } from 'react-icons/io';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Servicesub = () => {
  const items = [
    'SƏTƏM üzrə siyasətin hazırlanması',
    'SƏTƏM Planının hazırlanması',
    'Əməyin mühafizəsinə dair illik tədbirlər planının hazırlanması',
    'Prosedurların hazırlanması',
    'Vəzifələr üzrə təhlükəsizlik təlimatlarının hazırlanması',
    'Cavabdeh şəxslər üçün təlimatın hazırlanması',
    'İş təlimatların hazırlanması',
    'Yanğın təhlükəsizlik qaydalarının hazırlanması',
    'Fövqaladə hallara hazırlıq',
    'Bədbəxt hadisələrin aradan qaldırılması sxemlərinin tətbiqi',
    'Qəzaların ləğvi planları',
    'Fövqaladə hadisə baş verdikdə davranış qaydaları',
    'Texniki təhlükəsizlik bəyannaməsinin hazırlanması',
    'Əməyin mühafizəsi üzrə Giriş təlimatının keçirilməsi',
  ];

  const navigate = useNavigate();

  const handleItemClick = (index) => {
    navigate(`/servicessub/${index}`, { state: { itemIndex: index, itemName: items[index] } });
  };

  return (
    <>
      <PageContainer>
        <div id="servicesub">
          <div className="servicesub__top">
            <img className='servicesubphoto' src={servicesub} alt="" />
            <div className="servicesubhoots__text">
              <h2 className='servicesubnames'>Təlimlər, tədbir və elanlar</h2>
              <p className='servicesubreportext'>
                Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.
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
                        {item}
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
        </div>
        <Cerfitacion />
      </PageContainer>
    </>
  );
};

export default Servicesub;

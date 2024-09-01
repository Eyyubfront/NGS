import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import Frame from "../../assets/images/Frame.png";
import { Container } from '@mui/material';
import Traningcontainer from '../../components/Traningcontainer/Traningcontainer';

const Traningpages = () => {
    const [events, setEvents] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Veriyi sıfırlayın
                setEvents([]);

                // Yeni veriyi alın
                const response = await axios.get("https://ngs-794fc9210221.herokuapp.com/api/events");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <PageContainer>
                <div id='traningpages'>
                    <div className="traning__top">
                        <img className='framesphoto' src={Frame} alt="" />
                        {events.length > 0 ? (
                            events.map(event => (
                                <div key={event.id} className="traningphoots__text">
                                    <h2 className='toptraningsnames'>{event.name}</h2>
                                    <p className='traningreportext'>{event.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>{t('loading')}</p>
                        )}
                    </div>
                    <Container>
                        <div className="traning__container">
                            <div className="traning__containernames">
                                <p>{t('date')}</p>
                                <p>{t('topic')}</p>
                            </div>
                            <Traningcontainer />
                        </div>
                    </Container>
                </div>
                <Cerfitacion />
            </PageContainer>
        </>
    );
};

export default Traningpages;

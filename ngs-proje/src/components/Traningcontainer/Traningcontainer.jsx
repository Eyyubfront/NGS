import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const Traningcontainer = () => {
    const [services, setServices] = useState([]);

    const handleGetTraning = async () => {
        try {
            const response = await axios.get("https://ngs-794fc9210221.herokuapp.com/api/events");
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        handleGetTraning();
    }, []);

    return (
        <div id="traning__allcontainers">
            <div className="traning_listallcards">
                {services.map((training) => (
                    <div key={training.id} className="traning__list">
                        <div className="list__card">
                            <div className="date__namescard">
                                <div className="traning__date">
                                    <CalendarTodayIcon/>
                                    <p className="datewathc">{training.date || 'Tarih Bilgisi Yok'}</p>
                                </div>
                            </div>
                            <Link className='listshref' to={training.link}>
                                <div className="list__btn">
                                    Qoşul
                                </div>
                            </Link>
                        </div>
                        <div className="traning__botomline"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Traningcontainer;

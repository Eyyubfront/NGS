import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

const Traningcontainer = () => {
    const [services, setServices] = useState([]);
    const [selectedDate, setSelectedDate] = useState({});

    const handleDateChange = (event, index) => {
        const date = new Date(event.target.value);
        const formattedDate = date.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        setSelectedDate(prevState => ({
            ...prevState,
            [index]: formattedDate
        }));
    };

    const handleGetTraning = async () => {
        await axios.get("https://ngs-794fc9210221.herokuapp.com/api/services")
            .then(response => {
                console.log(response.data)
                setServices(response.data)
            })
    }

    useEffect(() => {
        handleGetTraning()
    }, [])

    return (
        <div id="traning__allcontainers">
            <div className="traning_listallcards">
                {services.map((training) => (
                    <div key={training.id} className="traning__list">
                        <div className="list__card">
                            <div className="date__namescard">
                                <div className="traning__date">
                                    <input
                                        type="date"
                                        id={`datePicker-${training.id}`}
                                        style={{ display: 'none' }}
                                        onChange={(event) => handleDateChange(event, training.id)}
                                    />
                                    <button
                                        className="date-picker-button"
                                        onClick={() => document.getElementById(`datePicker-${training.id}`).click()}
                                    >
                                        <FaCalendarAlt className="calendar-icon" />
                                    </button>
                                    <p className="datewathc">{selectedDate[training.id] || '16 Yanvar 2024'}</p>
                                </div>
                                <p className="publicstexts">{training.title}</p>
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
}

export default Traningcontainer;

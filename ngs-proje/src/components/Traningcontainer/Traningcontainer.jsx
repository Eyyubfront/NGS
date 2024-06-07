import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Traningcontainer = () => {
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

    const trainings = [
        { id: 1, title: "SƏTƏM üzrə siyasətin hazırlanması təlimi",  link: "/traningids" },
        { id: 2, title: "SƏTƏM üzrə siyasətin hazırlanması təlimi",  link: "/traningids" },
        { id: 3, title: "SƏTƏM üzrə siyasətin hazırlanması təlimi", link: "/traningids" },
        { id: 4, title: "SƏTƏM üzrə siyasətin hazırlanması təlimi", link: "/traningids" },
        { id: 5, title: "SƏTƏM üzrə siyasətin hazırlanması təlimi", link: "/traningids" }
    ];

    return (
        <div id="traning__allcontainers">
            <div className="traning_listallcards">
                {trainings.map((training, index) => (
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

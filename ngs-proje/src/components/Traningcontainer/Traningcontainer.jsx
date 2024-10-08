import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format } from 'date-fns'; // date-fns kütüphanesinden format fonksiyonunu import et
import { az } from 'date-fns/locale'; // Azerice yerelleştirme için az localesini import et
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Traningcontainer = () => {
  const [services, setServices] = useState([]);
  const { t } = useTranslation(); // Çeviri hook'u
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Tarihi "16 Yanvar 2024" formatında döndür
    return format(date, 'd MMMM yyyy', { locale: az });
  };

  return (
    <div id="traning__allcontainers">
      <div className="traning_listallcards">
        {services.map((training) => (
          <div key={training.id} className="traning__list">
            <div className="list__card">
              <div className="date__namescard">
                <div className="traning__date">
                  <CalendarTodayIcon />
                  <p className="datewathc">
                    {training.date ? formatDate(training.date) : 'Tarih Bilgisi Yok'}
                  </p>
                </div>
              </div>
              <Link className='listshref' to={`/traningids/${training.id}`}>
                <div className="list__btn">
                {t('join')}
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

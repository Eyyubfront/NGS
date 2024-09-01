import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Training = () => {
  const { t } = useTranslation();

  return (
    <div id="training">
      <div className="training__content">
        <h2>{t('TrainingTitle')}</h2>
        <p>{t('TrainingDescription')}</p>
        <Link className="training__btn" to='/traningpages'>
          {t('MoreDetails')}
        </Link>
      </div>
    </div>
  );
};

export default Training;

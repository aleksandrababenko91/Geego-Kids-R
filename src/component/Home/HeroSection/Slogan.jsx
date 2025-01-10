import React from 'react';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';

const Slogan = () => {
  const { t } = useTranslation();

  return (
    <div className="textContainer">
      <h1>{t("slogan")}</h1>
    </div>
  );
};

export default Slogan;

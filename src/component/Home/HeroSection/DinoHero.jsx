import React from "react";
import './DinoHero.css';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';

const DinoHero = () => {
  const { t } = useTranslation();

  return (
    <div className="mentor" data-aos="fade-left">
      <div className="mentor-container">
        <div className="mentor-wrapper">
          <div className="mentor-text">
            <img src="/image/logo.svg"   alt="logo pic" className="responsiveImage" />
            <div className="textContainer">
              <h2>{t("slogan")}</h2>
            </div>
          </div>
          <div className="mentor-wrapper-img">
            <img
              className="mentor-image-mobile"
              src="./image/dino2.png"
              alt="About mentor team"
            />
            <img
              className="mentor-image"
              src="./image/dino.png"
              alt="About mentor team"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoHero;

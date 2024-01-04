import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Home.css";

const Home = () => {

  const { t } = useTranslation();

  return (
    <div className="Home">
      <h1>{t('home')}</h1>
      <div className="Buttons">
        <Link to="/Challenges">
          <Button 
            imgUrl="/image/2023/ikoni_geegocity.png"
            name={t('home-city')}
            bgColor="#6B377C"
            bgColor2="rgb(124 54 147 / 30%)"
            description={t('home-city-description')}
          />
        </Link>
        <Link to="/Skills">
          <Button
            imgUrl="/image/2023/ikoni_sporttiparkki.png"
            name={t('home-sport')}
            bgColor="#0074AC"
            bgColor2="rgb(31 130 178 / 30%)"
            description={t('home-sport-description')}
          />
        </Link>
        <Link to="/Toddlers">
          <Button
            imgUrl="/image/2023/ikoni_koulu.png"
            name={t('home-school')}
            bgColor="#EB6A39"
            bgColor2="rgb(235, 106, 57 / 0.3)"   
            description={t('home-school-description')}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;

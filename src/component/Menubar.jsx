import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./Menubar.css";
import "../index.css";

const Menubar = (props) => {

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);

   //pois window.location.reload(true);
  };

  return (
    <div className="Menubar">
      <Link to="/">
        <img src="/image/geegokids_logo_rgb.png" alt="logo" />
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/Challenges">{t('home-city')}</Link>
          </li>
          <li>
            <Link to="/Skills">{t('home-sport')}</Link>
          </li>
          <li>
            <Link to="/Toddlers">{t('home-school')}</Link>
          </li>
          <li>
          <Link to="#!" onClick={() => handleLanguageChange('fi')}>
    <img src="image/fin.svg" alt="Finnish" style={{ width: '35px' }} />
</Link>
          </li>
          <li>
          <Link to="#!" onClick={() => handleLanguageChange('sv')}>
    <img src="image/sv.svg" alt="Finnish" style={{ width: '35px' }} />
</Link>

          </li>
          <li>
          <Link to="#!" onClick={() => handleLanguageChange('en')}>
    <img src="image/uk.svg" alt="Finnish" style={{ width: '35px' }} />
</Link>
          </li>
          <li>
            <Logout token={props.token} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;

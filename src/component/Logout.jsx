import React from "react";
import { useTranslation } from 'react-i18next';
import './Logout.css';

const Logout = (props) => {
  const handleLogout = () => {
    var currentLanguage = localStorage.getItem('lang');
    localStorage.clear(props.token);
    localStorage.setItem('lang', currentLanguage);
    window.location.reload();
  };

  const { t } = useTranslation();
  
  return (
    <button className="btn_main" onClick={handleLogout}>
      {/* <i className="fa-solid fa-user"></i> */}
      {t('menu-logout')}
    </button>
  );
};

export default Logout;

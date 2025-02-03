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
    <button className="btnOut_main" onClick={handleLogout}>
      {t('menu-logout')}
    </button>
  );
};

export default Logout;

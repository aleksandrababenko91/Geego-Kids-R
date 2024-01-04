import React from "react";
import { useTranslation } from 'react-i18next';

const Logout = (props) => {
  const handleLogout = () => {
    var currentLanguage = localStorage.getItem('lang');
    localStorage.clear(props.token);
    localStorage.setItem('lang', currentLanguage);
    window.location.reload();
  };

  const { t } = useTranslation();
  
  return (
    <div className="Logout" onClick={handleLogout}>
      <i className="fa-solid fa-user"></i>
      {t('menu-logout')}
    </div>
  );
};

export default Logout;

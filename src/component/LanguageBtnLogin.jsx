import React from "react";
import './LanguageBtnLogin.css';
import i18n from '../i18n';

const locales = ["en", "fi", "sv"]; 

export default function LanguageBtn({ currentLocale, onLanguageChange, colorClass }) {

  const handleCheckLocale = (item) => {
    onLanguageChange(item); // server lang change func
    i18n.changeLanguage(item);  //local lang change func
  };

  return (
    <div className={`boxBtnLogin ${colorClass}`}>
      {locales.map((locale) => (
        <button
          key={locale}
          className={`btn_langLogin ${colorClass} ${currentLocale === locale ? "_active" : ""}`}
          onClick={() => handleCheckLocale(locale)}
          type="button"
        >
          <img
            src={`/image/flags/${locale}.png`}
            alt={`${locale} flag`}
            className="flag_iconLogin"
            width={20}
            height={20}
          />
        </button>
      ))}
    </div>
  );
}

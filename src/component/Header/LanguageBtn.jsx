import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import './LanguageBtn.css';
import i18n from '../../i18n';

const locales = ["en", "fi", "se"]; 

export default function LanguageBtn({ currentLocale, onLanguageChange, colorClass }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleCheckLocale = (item) => {
    setIsOpen(false);
    onLanguageChange(item); // server lang change func
    i18n.changeLanguage(item);  //local lang change func
  };

  const handleOutsideClick = (event) => {
    if (
      !submenuRef.current?.contains(event.target) &&
      !(event.target === menuRef.current || menuRef.current?.contains(event.target))
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className={`boxBtn ${colorClass}`}>
      <button
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`btn_lang ${colorClass} ${isOpen ? "_active" : ""} ${currentLocale}`}
        type="button"
      >
         <img
          src={`/image/flags/${currentLocale}.png`}
          alt={`${currentLocale} flag`}
          className="flag_icon"
          width={20}
          height={20}
        />
        <span className={`btn_icon ${isOpen ? "btn_icon_up" : ""}`}>
          <img src="/image/arrow.svg" alt="language arrow" width={15} height={15} />
        </span>
      </button>
      {isOpen && (
        <div ref={submenuRef} className="options">
          {locales.map((item) =>
            item !== currentLocale ?   (
              <button
                className="options_item_btn"
                key={item}
                onClick={() => handleCheckLocale(item)}
                type="button"
              >
                {item.toUpperCase()}
              </button>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

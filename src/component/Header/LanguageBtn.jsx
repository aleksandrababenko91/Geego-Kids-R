import { useEffect, useRef, useState } from "react";
import './LanguageBtn.css';

const locales = ["en", "fi", "se"]; // Example locales

export default function LanguageBtn() {
  const [currentLocale, setCurrentLocale] = useState("en"); // Default locale
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleCheckLocale = (item) => {
    setIsOpen(false);
    setCurrentLocale(item);
    console.log(`Changed locale to: ${item}`);
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
    <div className="boxBtn">
      <button
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`btn_lang ${isOpen ? "_active" : ""} ${currentLocale}`}
        type="button"
      >
        <span>{currentLocale.toUpperCase()}</span>
        <span className={`btn_icon ${isOpen ? "btn_icon_up" : ""}`}>
          <img src="/image/arrow.svg" alt="language arrow" width={15} height={15} />
        </span>
      </button>
      {isOpen && (
        <div ref={submenuRef} className="options">
          {locales.map((item) =>
            item !== currentLocale ? (
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



import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { locales } from "@/i18n";
import { usePathname, useRouter } from "@/navigation";
import Image from "next/image";
import style from './LanguageBtn.module.scss';
import clsx from "clsx";
import arrow from '../../../../public/images/arrow.svg'

export default function LanguageBtn() {
  const router = useRouter();
  const path = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);

  const handleCheckLocale = (item) => {
    setIsOpen(!isOpen);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event) => {
    if (
      !submenuRef.current?.contains(event.target) &&
      !(
        event.target === menuRef.current ||
        menuRef.current?.contains(event.target)
      )
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);



  return (
    <div className={style.box}>
      <button
        ref={menuRef}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(style.btn_lang, isOpen && style._active)}
        type="button"
        // aria-label={ariaLabelsText(currentLocale).btn_lang}

      >
        <span>{currentLocale.toUpperCase()}</span>
        <span className={clsx(style.btn_icon, isOpen && style.btn_icon_up)}>
          <Image src={arrow} alt="language arrow" width={15} height={15} />
        </span>
      </button>
      {isOpen && (
        <div ref={submenuRef} className={style.options}>
          {locales.map((item) =>
            item !== currentLocale ? (
              <button
                className={style.options_item_btn}
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
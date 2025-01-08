// import MainLink from "../shared/MainLink/MainLink";
import { Link } from "react-router-dom";

import './Menu.css';

import { useTranslation } from 'react-i18next';


const Menu = () => {
  const { t } = useTranslation();


  return (
    <ul className="menu">
          <li>
          <Link to="/Challenges" >{t('home-city')}</Link>
          </li>
          <li>
            <Link to="/Skills" >{t('home-sport')} </Link>
          </li>
          <li>
            <Link to="/Toddlers" >{t('home-school')}</Link>
          </li>
    </ul>
  );
};

export default Menu;
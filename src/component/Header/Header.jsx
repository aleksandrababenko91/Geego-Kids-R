import LanguageBtn from './LanguageBtn';
import Menu from "./Menu";
import './Header.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logout from '../Logout';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Logo from '../shared/Logo/Logo';

const Header = ({ token, currentLocale, onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <div className="mainHeader">
      <div className="wrapperHeader">
        <Logo />
        <Menu />
        <Logout token={token} />
        <LanguageBtn 
          currentLocale={currentLocale} 
          onLanguageChange={onLanguageChange} 
        />
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Header;

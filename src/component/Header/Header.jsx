import LanguageBtn from './LanguageBtn';
import Menu from "./Menu";
import './Header.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logout from '../Logout';
 import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Logo from './Logo/Logo';

const Header = (props) => {
  const { t } = useTranslation();

  return (
    <div className="mainHeader">
      <div className="wrapper-header">
      {/* <Link to="/">
        <img src="/image/geegokids_logo_rgb.png" fill sizes="100%" alt="logo" className="logo-header" />
      </Link> */}

      <Logo />
        <Menu />
        <Logout token={props.token} />
        <LanguageBtn  />
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Header;
// import LanguageBtn from './LanguageBtn';
import Menu from "./Menu";
import './Header.css';
// import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logout from '../Logout';
 import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Header = (props) => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="wrapper">
      <Link to="/">
        <img src="/image/geegokids_logo_rgb.png" alt="logo" className="logo" />
      </Link>
        <Menu />
        <Logout token={props.token} />
        {/* <LanguageBtn  /> */}
      </div>
      {/* <BurgerMenu /> */}
    </div>
  );
};

export default Header;
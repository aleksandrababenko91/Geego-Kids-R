import LanguageBtn from './LanguageBtn';
import Menu from "./Menu";
import './Header.css';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logout from '../Logout';

import Logo from '../shared/Logo/Logo';

const Header = ({ token, currentLocale, onLanguageChange, colorClass }) => {


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

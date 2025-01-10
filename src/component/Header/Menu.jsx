// import MainLink from "../shared/MainLink/MainLink";
import MainLink from '../shared/MainLink/MainLink';
import './Menu.css';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <ul className="menu">
          <li>
          <MainLink to="/Challenges" >{t('home-city')}</MainLink>
          </li>
          <li>
            <MainLink to="/Skills" >{t('home-sport')} </MainLink>
          </li>
          <li>
            <MainLink to="/Toddlers" >{t('home-school')}</MainLink>
          </li>
          <li>
            <MainLink to="https://www.geegokids.com/fi/" >{t('palaute')}</MainLink>
          </li>
          <li>
            <MainLink to="https://www.geegokids.com/fi/" >{t('ladata')}</MainLink>
          </li>
    </ul>
  );
};

export default Menu;
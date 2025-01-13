import MainLink from '../shared/MainLink/MainLink';
import './Menu.css';
import { useTranslation } from 'react-i18next';
import { navigationLinksHeader } from "./constants";
import { createKey } from './createKey';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <ul className="menu">
          {navigationLinksHeader.map(({ url, name, type }) => (
        <MainLink url={url} key={createKey()} type={type} name={name}>
          {t(name)}
        </MainLink>
      ))}
    </ul>
  );
};

export default Menu;
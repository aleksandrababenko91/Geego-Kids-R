import MainLink from "../../shared/MainLink/MainLink";
import { navigationLinks } from "./constants";
import './FooterLinks.css';
import { createKey } from '../../shared/createKey';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const FooterLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="list-links">
      {navigationLinks.map(({ url, name, type }) => (
        <MainLink url={url} key={createKey()} type={type} name={name}>
          {t(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default FooterLinks;
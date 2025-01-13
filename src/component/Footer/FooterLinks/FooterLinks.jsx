import MainLink from "../../shared/MainLink/MainLink";
import { navigationLinks } from "./constants";
import './FooterLinks.css';
import { createKey } from '../../shared/createKey';
// import { useTranslations } from 'next-intl';


const FooterLinks = () => {
  // const t = useTranslations("Footer");

  return (
    <div className="list-links">
      {navigationLinks.map(({ url, name, type }) => (
        <MainLink url={url} key={createKey()} type={type} name={name}>
           {name}
        </MainLink>
      ))}
    </div>
  );
};

export default FooterLinks;
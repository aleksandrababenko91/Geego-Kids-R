import MainLink from "../MainLink/MainLink";
import { navigationLinks } from "./constants";
import './FooterLinks.css';
import { createKey } from '../../../lib/createKey';
// import { useTranslations } from 'next-intl';


const FooterLinks = () => {
  // const t = useTranslations("Footer");

  return (
    <div className="list">
      {navigationLinks.map(({ url, name, type }) => (
        <MainLink url={url} key={createKey()} type={type} name={name}>
        {/* <MainLink url={url} key={createKey()} type={type} name={t(name)}> */}
          {/* {t(name)} */} {name}
        </MainLink>
      ))}
    </div>
  );
};

export default FooterLinks;
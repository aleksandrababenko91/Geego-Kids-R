import React from "react";
import { helpLinks } from "./constants";
import './HelpLinks.css';
import { createKey } from "../../shared/createKey";
import MainLink from "../../shared/MainLink/MainLink";

// import { useTranslations } from 'next-intl';

const HelpLinks = () => {
  // const t = useTranslations("Footer");

  return (
    <div className="helpList">
      {helpLinks.map(({ url, name, type }) => (
        <MainLink
          url={url}
          key={createKey()}
          type={type}
          name={name}
          // name={t(name)}
        >
          {/* {t(name)} */} {name}
        </MainLink>
      ))}
    </div>
  );
};

export default HelpLinks;
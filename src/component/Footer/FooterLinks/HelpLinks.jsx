import React from "react";
import { helpLinks } from "./constants";
import './HelpLinks.css';
import { createKey } from "../../shared/createKey";
import MainLink from "../../shared/MainLink/MainLink";

import { useTranslation } from 'react-i18next';

const HelpLinks = () => {
  const { t } = useTranslation();
  
  return (
    <div className="helpList">
      {helpLinks.map(({ url, name, type }) => (
        <MainLink
          url={url}
          key={createKey()}
          type={type}
          name={t(name)}
        >
          {t(name)} 
        </MainLink>
      ))}
    </div>
  );
};

export default HelpLinks;
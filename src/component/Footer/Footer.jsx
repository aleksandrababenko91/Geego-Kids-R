import React from "react";
import ContactLinks from "./FooterLinks/ContactLinks";
import SocialIcons from "./FooterLinks/SocialIcons";
import FooterLinks from "./FooterLinks/FooterLinks";
import './Footer.css';
import { Link } from "react-router-dom";
import HelpLinks from "./FooterLinks/HelpLinks";
import { helpLinks } from "./FooterLinks/constants";
// import { useTranslation } from 'react-i18next';
// import Logo from '../shared/Logo/Logo';

const Footer = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div className="section-footer">
        <div className="block-footer bigScreen">
          <div className="footer">
            <Link to="/">
              <img src="/image/geegokids_logo_rgb.png" className="logo" alt="logo" className="logo" />
            </Link>
            {/* <Logo /> */}
            <FooterLinks />
            <HelpLinks helpLinks= {helpLinks} />
            <div className="contacts--footer">
              <div className="positionContacts">
                <ContactLinks />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div className="smallScreen">
          <Link to="/">
            <img src="/image/geegokids_logo_rgb.png" alt="logo" className="logo" />
          </Link>
          <FooterLinks />
          <HelpLinks helpLinks= {helpLinks} />
          <ContactLinks />
          <SocialIcons />
        </div>
        <p className="logoWrapper-footer">VARALA LOVE GEEGO</p>
      </div>
    </>
  );
};

export default Footer;
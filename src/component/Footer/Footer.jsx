import React from "react";
import ContactLinks from "../ContactLinks/ContactLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import FooterLinks from "./FooterLinks/FooterLinks";
import './Footer.css';
import Logo from './Logo/Logo';
import HelpLinks from "../FooterLinks/HelpLinks";
import { helpLinks } from "../FooterLinks/constants";

const Footer = () => {
  return (
    <>
      <div className="section">
        <div className={`${styles.block} ${styles.bigScreen}`}>
          <div className="footer">
            <Logo className="logo" />
            <FooterLinks />
            <HelpLinks helpLinks= {helpLinks} />
            <div className="contacts">
              <div className="positionContacts">
                <ContactLinks />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div className="smallScreen">
          <Logo  />
          <FooterLinks />
          <HelpLinks helpLinks= {helpLinks} />
          <ContactLinks />
          <SocialIcons  />
        </div>
          <p className="logoWrapper">VARALA LOVE GEEGO</p>
      </div>
    </>
  );
};

export default Footer;
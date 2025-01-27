import React from "react";
import ContactLinks from "./FooterLinks/ContactLinks";
import SocialIcons from "./FooterLinks/SocialIcons";
import FooterLinks from "./FooterLinks/FooterLinks";
import './Footer.css';
import { Link } from "react-router-dom";
import HelpLinks from "./FooterLinks/HelpLinks";
import { helpLinks } from "./FooterLinks/constants";

const Footer = () => {

  return (
    <>
      <div className="section-footer">
        <div className="block-footer bigScreen">
          <div className="footer">
            <Link to="/">
              <img src="/image/geegokids_logo_rgb.png" alt="logo" className="logo" />
            </Link>
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

          <img src="/image/varalaLove.png" alt="varala picture" className="logoWrapper-footer"></img>

      </div>
    </>
  );
};

export default Footer;
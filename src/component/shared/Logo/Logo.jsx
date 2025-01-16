import MainLink from "../../shared/MainLink/MainLink";
import './Logo.css';

export default function Logo() {

  return (
    <MainLink  url="/">
        <img src="/image/geegokids_logo_rgb.png" fill sizes="100%" alt="logo"  className="logo-header"  />
    </MainLink>

  );
}
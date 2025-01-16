import MainLink from "../../shared/MainLink/MainLink";
import './Logo.css';

export default function Logo() {

  return (
    <MainLink  url="/">
        <img src="/image/geegokids_logo_rgb.png" alt="logo"  className="logo-header"  />
    </MainLink>

  );
}
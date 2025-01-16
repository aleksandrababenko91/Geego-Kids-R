// import MainLink from "../../shared/MainLink/MainLink";
import './Logo.css';
import { Link } from "react-router-dom";


export default function Logo() {

  return (
    <Link to="/"> 
        <img src="/image/geegokids_logo_rgb.png" alt="logo"  className="logo-header"  />
    </Link>

  );
}
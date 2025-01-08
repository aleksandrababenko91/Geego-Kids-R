// import MainLink from "../../../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./Menu.module.scss";
import { createKey } from '../../../../../lib/createKey'
import MainLink from "../../../MainLink/MainLink";


const Menu = () => {

  return (
    <ul className={styles.menu}>
      {navigationLinks.map(({ url, name, type }) => (
        <li key={createKey()}>
          <Link url={url}  name={name}>
            {(name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
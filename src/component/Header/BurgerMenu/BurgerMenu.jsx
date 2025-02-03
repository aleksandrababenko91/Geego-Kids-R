import './BurgerMenu.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logout from './Logout';


const BurgerMenu = ({ token }) => {
  const { t } = useTranslation();

  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0,
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div className={`navbar ${burgerMenuActive ? 'active' : ''}`}>
      <div className="navigationMain">
        <div
          className="burgerMenuContainer"
          onClick={() => toggleBurgerMenu()}
        >
          <div className="burgerMenuTrigger"></div>
          <div className="burgerMenu"></div>
        </div>
      </div>
      <div className="contentBurger">
        <motion.ul
          animate={burgerMenuActive ? 'open' : 'closed'}
          variants={motionVariants}
        >
          <motion.li variants={listItemVariants}>
            <a href="/Challenges">{t("home-city")}</a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="/Skills">{t("home-sport")}</a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="/Toddlers">{t("home-school")}</a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="https://www.geegokids.com/fi/palaute/">{t("palaute")}</a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <a href="https://www.geegokids.com/fi/materiaalit/">{t("ladata")}</a>
          </motion.li>
          <motion.li variants={listItemVariants}>
            <Logout token={token} />         
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
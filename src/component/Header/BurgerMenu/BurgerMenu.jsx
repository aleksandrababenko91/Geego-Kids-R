

import './BurgerMenu.css'
import { motion } from 'framer-motion';
import { useState } from 'react';


export default function BurgerMenu() {
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
      <div className="navigation">
        <div
          className="burgerMenuContainer"
          onClick={() => toggleBurgerMenu()}
        >
          <div className="burgerMenuTrigger"></div>

          <div className="burgerMenu"></div>

        </div>
      </div>
      <div className="content">

        <motion.ul
          animate={burgerMenuActive ? 'open' : 'closed'}
          variants={motionVariants}
        >
           <motion.li variants={listItemVariants}>
                <a href="/geegocity">Geegocity</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/sporttiparkkki">Sporttiparkki</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Koulu</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Tietosuoja</a>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <a href="/">Ladata tiedosta</a>
              </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
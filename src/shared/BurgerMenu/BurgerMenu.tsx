import React from "react";
import styles from "./burgerMenu.module.scss";
import { motion } from "framer-motion";

type BurgerMenuProps = {
  setActiveMenu: (args: boolean) => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ setActiveMenu }) => {
  return (
    <motion.nav
      initial={{
        width: 0,
      }}
      animate={{
        width: "100vw",
        transition: {
          duration: 1,
        },
      }}
      exit={{
        width: 0,
        transition: {
          duration: 1,
        },
      }}
      onClick={() => {
        setActiveMenu(false);
      }}
      className={styles.menuWrapper}
    >
      <motion.ul
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        exit={{
          opacity: 0,
          x: 200,
          transition: {
            duration: 1,
          },
        }}
        className={styles.listMenu}
      >
        <li>Games</li>
        <li>Teams</li>
        <li>Players</li>
      </motion.ul>
    </motion.nav>
  );
};

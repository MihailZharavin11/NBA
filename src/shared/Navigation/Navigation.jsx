import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className={styles.navigationWrapper}>
      <nav>
        <ul className={styles.navigationList}>
          <li>Games</li>
          <li>Teams</li>
          <li>Players</li>
        </ul>
      </nav>
      <nav>
        <div
          onClick={() => setActiveMenu(!activeMenu)}
          className={styles.navigationBtn}
        >
          <span></span>
        </div>
      </nav>
      <AnimatePresence>
        {activeMenu && <BurgerMenu setActiveMenu={setActiveMenu} />}
      </AnimatePresence>
    </div>
  );
};

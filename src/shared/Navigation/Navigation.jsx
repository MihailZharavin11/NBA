import React from "react";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <nav>
        <ul className={styles.navigationList}>
          <li>Games</li>
          <li>Teams</li>
          <li>Players</li>
        </ul>
      </nav>
      <div className={styles.navigationBtn}>
        <span></span>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        <li>Games</li>
        <li>Teams</li>
        <li>Players</li>
      </ul>
    </nav>
  );
};

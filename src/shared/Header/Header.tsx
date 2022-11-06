import React from "react";
import { logo } from "../../images";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Navigation } from "../Navigation/Navigation";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.headerImg} src={logo} alt="header logo" />
      </div>
      <Navigation />
    </div>
  );
};

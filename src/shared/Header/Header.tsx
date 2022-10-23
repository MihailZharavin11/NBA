import React from "react";
import { logo } from "../../images";
import { Navigation } from "../Navigation/Navigation";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className="headerLogo">
        <img src={logo} alt="header logo" />
      </div>
      <Navigation />
    </div>
  );
};

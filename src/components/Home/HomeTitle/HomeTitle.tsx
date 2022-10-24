import React, { FC } from "react";
import { HomeTitleProps } from "../home.types";
import styles from "./homeTitle.module.scss";

export const HomeTitle: FC<HomeTitleProps> = ({ title, text }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

import React, { FC } from "react";
import { ImageProps } from "../home.types";
import styles from "./image.module.scss";

export const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <picture>
      <img className={styles.image} src={src} alt={alt} />
    </picture>
  );
};

import React from "react";
import styles from "./teamLogo.module.scss";

type TeamLogoProps = {
  imageSrc: string;
  alt: string;
};

export const TeamLogo: React.FC<TeamLogoProps> = ({ imageSrc, alt }) => {
  return (
    <div className={styles.teamLogo}>
      <img className={styles.teamLogoImage} src={imageSrc} alt={alt} />
    </div>
  );
};

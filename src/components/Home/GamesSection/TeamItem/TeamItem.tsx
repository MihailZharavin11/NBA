import React, { FC } from "react";
import { TeamItemProps } from "../../home.types";
import styles from "./teamItem.module.scss";

export const TeamItem: FC<TeamItemProps> = ({ src, name, win, lose }) => {
  return (
    <div className={styles.team}>
      <img className={styles.teamImage} src={src} alt="TeamLakers" />
      <div className="infoTeam">
        <p className={styles.teamName}>{name}</p>
        <p className={styles.teamScore}>
          {win}-{lose}
        </p>
      </div>
    </div>
  );
};

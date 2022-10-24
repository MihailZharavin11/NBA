import React, { FC } from "react";
import { ScoreTableProps } from "../../home.types";
import styles from "./scoreTable.module.scss";

export const ScoreTable: FC<ScoreTableProps> = ({
  team1,
  team2,
  score1,
  score2,
}) => {
  return (
    <div className={styles.scoreTable}>
      <div className={styles.infoTeam}>
        {team1}
        <span className={styles.score}>{score1}</span>
      </div>
      <div className={styles.infoTeam}>
        <span className={styles.score}>{score2}</span>
        {team2}
      </div>
    </div>
  );
};

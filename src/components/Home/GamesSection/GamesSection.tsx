import React from "react";
import { HomeTitle } from "../HomeTitle/HomeTitle";
import styles from "./gamesSection.module.scss";
import { Lakers } from "../../../images/index";
import { ScoreTable } from "./ScoreTable/ScoreTable";
import { TeamItem } from "./TeamItem/TeamItem";

export const GamesSection = () => {
  return (
    <div className={styles.gamesSection}>
      <HomeTitle
        title="Games"
        text="follow the game you are interested in, track the results at any time"
      />
      <div className={styles.boxGames}>
        <ScoreTable
          team1={<TeamItem src={Lakers} name="Lakers" lose={41} win={32} />}
          score1={122}
          score2={123}
          team2={<TeamItem src={Lakers} name="Lakers" lose={41} win={32} />}
        />
      </div>
    </div>
  );
};

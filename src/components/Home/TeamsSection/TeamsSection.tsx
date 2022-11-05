import React from "react";
import { HomeButton } from "../HomeButton/HomeButton";
import { HomeTitle } from "../HomeTitle/HomeTitle";
import styles from "./teamSection.module.scss";

import Chicago from "../../../images/teamSection/Chicago.svg";
import { TeamBlock } from "./TeamBlock/TeamBlock";

export const TeamsSection = () => {
  return (
    <div className={styles.teamsSection}>
      <HomeTitle
        title="TEAMS"
        text="follow the game you are interested in, track the results at any time"
      />
      <TeamBlock />

      <HomeButton />
    </div>
  );
};

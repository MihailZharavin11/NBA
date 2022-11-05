import React from "react";
import styles from "./teamBlock.module.scss";
import { TeamItem } from "../TeamItem/TeamItem";
import {
  ChicagoLogo,
  BrooklynLogo,
  GoldenStateLogo,
  HeatLogo,
  LakersLogo,
} from "../../../../images";

export const TeamBlock = () => {
  return (
    <div className={styles.teamBlock}>
      <TeamItem imageSrc={ChicagoLogo} alt="Chicago" id="image-chicago" />
      <TeamItem imageSrc={BrooklynLogo} alt="Brooklyn" id="image-brooklyn" />
      <TeamItem
        imageSrc={GoldenStateLogo}
        alt="GoldenState"
        id="image-golden"
      />
      <TeamItem imageSrc={HeatLogo} alt="Heat" id="image-heat" />
      <TeamItem imageSrc={LakersLogo} alt="Lakers" id="image-lakers" />
    </div>
  );
};

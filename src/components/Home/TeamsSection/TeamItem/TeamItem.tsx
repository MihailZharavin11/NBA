import React from "react";
import { TeamLogo } from "../TeamLogo/TeamLogo";
import styles from "./teamItem.module.scss";
import Ball from "../../../../images/teamSection/Ball.svg";
import { motion, transform } from "framer-motion";

type TeamItemProps = {
  imageSrc: string;
  alt: string;
  id: string;
};

export const TeamItem: React.FC<TeamItemProps> = ({ imageSrc, alt, id }) => {
  return (
    <motion.div className={`${styles.teamItem} ${styles[id]}`}>
      <motion.img
        className={styles.backgroundBall}
        whileHover={{
          rotate: 360,
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
          },
        }}
        src={Ball}
        alt="ball"
      />
      <TeamLogo alt={alt} imageSrc={imageSrc} />
    </motion.div>
  );
};

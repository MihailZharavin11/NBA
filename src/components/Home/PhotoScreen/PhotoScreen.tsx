import React from "react";
import styles from "./photoScreen.module.scss";
import {
  LebronPhoto,
  RosePhoto,
  IrvingPhoto,
  JordanPhoto,
} from "../../../images";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ImageBlock } from "./ImageBlock/ImageBlock";
export const HomeImage = () => {
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], ["0px", "1370px"]);

  return (
    <div className={styles.homeImageWrapper}>
      <ImageBlock
        duration={1.6}
        direction={-100}
        src={LebronPhoto}
        alt="image-1"
        id="image-1"
      />
      <ImageBlock
        duration={1.6}
        direction={-200}
        src={RosePhoto}
        alt="image-2"
        id="image-2"
      />
      <ImageBlock
        duration={1.6}
        direction={180}
        src={IrvingPhoto}
        alt="image-3"
        id="image-3"
      />

      <ImageBlock
        duration={1.6}
        direction={400}
        src={JordanPhoto}
        alt="image-4"
        id="image-4"
      />
      <motion.div style={{ y: yVal }}>
        <h1 className={styles.homeImageTitle}>HOOPERS</h1>
      </motion.div>
    </div>
  );
};

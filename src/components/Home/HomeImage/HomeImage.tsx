import React, { useEffect } from "react";
import styles from "./homeImage.module.scss";
import { Lebron, Rose, Irving, Jordan } from "../../../images";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ImageBlock } from "../ImageBlock/ImageBlock";
export const HomeImage = () => {
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], ["0px", "1200px"]);

  return (
    <div className={styles.homeImageWrapper}>
      <ImageBlock
        duration={1.6}
        direction={-100}
        src={Lebron}
        alt="image-1"
        id="image-1"
      />
      <ImageBlock
        duration={1.6}
        direction={-200}
        src={Rose}
        alt="image-2"
        id="image-2"
      />
      <ImageBlock
        duration={1.6}
        direction={180}
        src={Irving}
        alt="image-3"
        id="image-3"
      />

      <ImageBlock
        duration={1.6}
        direction={400}
        src={Jordan}
        alt="image-4"
        id="image-4"
      />
      <motion.div style={{ y: yVal }}>
        <h1 className={styles.homeImageTitle}>HOOPERS</h1>
      </motion.div>
    </div>
  );
};

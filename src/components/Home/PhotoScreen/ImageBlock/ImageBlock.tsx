import React, { FC, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageBlockProps } from "../../home.types";
import { Image } from "../Image/Image";
import styles from "./imageBlock.module.scss";

export const ImageBlock: FC<ImageBlockProps> = ({
  src,
  alt,
  id,
  duration,
  direction,
}) => {
  const [move, setMove] = useState(false);
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (move) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [move]);

  const item = {
    hidden: {
      opacity: 0,
      y: direction,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      style={{ y: move ? yVal : 0 }}
      onAnimationComplete={() => setMove(true)}
      className={`${styles.imageBlock} ${styles[id]}`}
      variants={item}
      initial="hidden"
      animate="show"
    >
      <Image src={src} alt={alt} />
    </motion.div>
  );
};

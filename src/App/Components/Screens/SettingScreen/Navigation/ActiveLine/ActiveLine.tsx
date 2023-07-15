import { FC } from "react";
import style from "./ActiveLine.module.scss";
import { motion } from "framer-motion";

export const ActiveLine: FC = () => {
  return <motion.div layoutId="activeLine" className={style.line} />;
};

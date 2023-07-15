import { FC } from "react";
import style from "./NavigationSettingItem.module.scss";
import { INavSetting } from "../navigation-settings.inderface";
import { Link, useMatch } from "react-router-dom";
import { Icon } from "../../../../UI/Icon/Icon";
import { motion } from "framer-motion";
import { ActiveLine } from "../ActiveLine/ActiveLine";

export const NavigationSettingItem: FC<INavSetting> = ({
  icon,
  link,
  title,
}) => {
  const isActive = useMatch(`/setting/${link}`); // вот тут баг от самой библиотеки, пришлось работать с абсолютным путем (твари)
  return (
    <Link to={link} className={style.link}>
      <motion.div
        className={style.item}
        initial={{ color: "#EBEBEB", fill: "#EBEBEB" }}
        animate={{
          color: isActive ? "#000000" : "#EBEBEB",
          fill: isActive ? "#000000" : "#EBEBEB",
        }}
      >
        <Icon name={icon} />
        <span className={style.title}>{title}</span>
        {isActive && <ActiveLine />}
      </motion.div>
    </Link>
  );
};

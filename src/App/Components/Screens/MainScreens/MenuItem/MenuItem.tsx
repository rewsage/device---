import { FC } from "react";
import { IMenuItem } from "./MenuItem.interface";
import style from "./MenuItem.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "../../../UI/Icon/Icon";

export const MenuItem: FC<IMenuItem> = ({ icon, link, title }) => {
  return (
    <Link to={link} className={style.link}>
      <Icon name={icon} />
      <span className={style.title}>{title}</span>
    </Link>
  );
};

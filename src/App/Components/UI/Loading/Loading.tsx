import { FC } from "react";
import style from "./Loading.module.scss";

export const Loading: FC = () => {
  return <span className={style.loader}></span>;
};

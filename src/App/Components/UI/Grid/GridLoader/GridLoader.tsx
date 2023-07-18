import { FC, ReactNode } from "react";
import style from "./GridLoader.module.scss";

export const GridLoader: FC<{ LoaderCmp?: ReactNode }> = ({ LoaderCmp }) => {
  return (
    <div className={style.field}>
      {LoaderCmp ? LoaderCmp : <span className={style.loader} />}
    </div>
  );
};

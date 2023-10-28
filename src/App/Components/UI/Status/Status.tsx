import { FC } from "react";
import { IStatus } from "./Status.interface";
import style from "./Status.module.scss";
import cn from "classnames";

export const Status: FC<IStatus> = ({ value, radius = "20px" }) => {
  if (radius && typeof radius === "number") {
    radius = radius + "px";
  }
  return (
    <span
      style={{ width: radius, height: radius }}
      className={cn(style.status, { [style.error]: !value })}
    />
  );
};

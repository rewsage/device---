import { FC } from "react";
import { IButtonDeviceProps } from "./ButtonDevice.interface";
import style from "./ButtonDevice.module.scss";
import cn from "classnames";

export const ButtonDevice: FC<IButtonDeviceProps> = ({
  mode,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(style.default, {
        [style.green]: mode === "green",
        [style.gray]: mode === "gray",
      })}
    >
      {children}
    </button>
  );
};

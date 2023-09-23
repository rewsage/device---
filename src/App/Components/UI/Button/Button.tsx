import { FC } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";
import cn from "classnames";

export const Button: FC<IButton> = ({
  children,
  flat,
  disabled,
  loading,
  width = 100,
  height = 20,
  ...props
}) => {
  if (typeof width === "number") {
    width = width + "px";
  }
  if (typeof height === "number") {
    height = height + "px";
  }
  return (
    <button
      style={{ width, height }}
      {...props}
      className={cn(style.default, {
        [style.flat]: flat,
        [style.disabled]: disabled,
        [style.loading]: loading,
      })}
    >
      {children}
    </button>
  );
};

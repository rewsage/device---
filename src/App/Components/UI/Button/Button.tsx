import { FC } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";
import cn from "classnames";

export const Button: FC<IButton> = ({
  children,
  flat,
  disabled,
  loading,
  ...props
}) => {
  return (
    <button
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

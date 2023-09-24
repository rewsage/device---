import { FC, PropsWithChildren } from "react";
import style from "./ButtonMsg.module.scss";
import cn from "classnames";

interface IButton {
  fn: (...args: any) => void;
  line?: boolean;
}

export const ButtonMsg: FC<PropsWithChildren<IButton>> = ({
  fn,
  line = false,
  children,
}) => {
  return (
    <button className={cn(style.btn, { [style.line]: line })} onClick={fn}>
      {children}
    </button>
  );
};

import { FC, useEffect } from "react";
import style from "./Notify.module.scss";
import { INotify } from "./Notify.interface";
import cn from "classnames";
import { CloseBtn } from "../Msg/CloseBtn/CloseBtn";

type propsNotify = INotify & { close: (id: number) => void };

export const Notify: FC<propsNotify> = ({
  text,
  title,
  idNotify,
  close,
  autoHide = true,
  isError = false,
  defaultHideTimeout = 10,
  ...props
}) => {
  const closeTime = Date.now() + defaultHideTimeout * 1000;
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;
  useEffect(() => {
    if (autoHide)
      closeTimeout = setTimeout(
        () => close(idNotify),
        defaultHideTimeout * 1000
      );
  }, []);

  const mouseOver = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  };

  const mouseOut = () => {
    const timeLeft = closeTime - Date.now();
    if (autoHide)
      closeTimeout = setTimeout(
        () => close(idNotify),
        timeLeft > 2000 ? timeLeft : 2000
      );
  };

  return (
    <div
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      className={cn(style.notify, { [style.error]: isError })}
      {...props}
    >
      <div className={style.title}>
        <div className={style.titleText}>{title}</div>
        <CloseBtn close={() => close(idNotify)} />
      </div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

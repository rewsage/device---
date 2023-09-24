import { FC, PropsWithChildren } from "react";
import style from "./Modal.module.scss";
import cn from "classnames";

interface IModalProps {
  isActive: boolean;
  isClosesModal?: boolean;
  close: (...args: any) => void;
}

export const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isActive,
  isClosesModal = true,
  close,
  children,
}) => {
  const handleClick = () => {
    if (!isClosesModal) return;
    close();
  };

  return (
    <div
      className={cn(style.modal, { [style.active]: isActive })}
      onClick={handleClick}
    >
      <div className={style.body} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

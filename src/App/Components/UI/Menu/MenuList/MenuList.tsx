import { FC, ReactNode } from "react";
import style from "./MenuList.module.scss";

interface IMenuListProps {
  firstChildren?: ReactNode;
  children: ReactNode;
  setIsOpen: (prev: boolean) => void;
}

export const MenuList: FC<IMenuListProps> = ({
  children,
  firstChildren,
  setIsOpen,
}) => {
  return (
    <>
      <div className={style.backdrop} onClick={() => setIsOpen(false)}></div>
      <div className={style.list}>
        {firstChildren && (
          <div className={style.firstChildren}>{firstChildren}</div>
        )}
        <div className={style.children}>{children}</div>
      </div>
    </>
  );
};

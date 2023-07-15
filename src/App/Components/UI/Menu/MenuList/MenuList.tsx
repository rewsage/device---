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
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={style.backdrop} onClick={closeMenu}></div>
      <div className={style.list}>
        {firstChildren && (
          <div className={style.firstChildren}>{firstChildren}</div>
        )}
        <div className={style.children} onClick={closeMenu}>
          {children}
        </div>
      </div>
    </>
  );
};

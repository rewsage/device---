import { Children, FC, ReactNode, useRef, useState } from "react";
import MenuButton from "./MenuButton/MenuButton";
import { MenuList } from "./MenuList/MenuList";
import style from "./Menu.module.scss";

interface IMenuProps {
  children: ReactNode;
  firstChild?: ReactNode;
}

export const Menu: FC<IMenuProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.menu}>
      <MenuButton onClick={() => setOpen((prev) => !prev)} />
      {open && <MenuList {...props} setIsOpen={setOpen} />}
    </div>
  );
};

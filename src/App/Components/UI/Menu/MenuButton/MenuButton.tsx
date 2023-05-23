import { FC } from "react";
import { IMenuButton } from "./MenuButton.interface";
import style from "./MenuButton.module.scss";

const MenuButton: FC<IMenuButton> = ({ ...rest }) => {
  return (
    <button {...rest} className={style.menu_button}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default MenuButton;

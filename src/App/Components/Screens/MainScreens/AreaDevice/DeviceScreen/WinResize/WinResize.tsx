import { FC, MouseEvent } from "react";
import style from "./WinResize.module.scss";

interface IResizeProps {
  nwOnMouseDown: (e: MouseEvent) => void;
  nOnMouseDown: (e: MouseEvent) => void;
  neOnMouseDown: (e: MouseEvent) => void;
  eOnMouseDown: (e: MouseEvent) => void;
  seOnMouseDown: (e: MouseEvent) => void;
  sOnMouseDown: (e: MouseEvent) => void;
  swOnMouseDown: (e: MouseEvent) => void;
  wOnMouseDown: (e: MouseEvent) => void;
}

export const WinResize: FC<IResizeProps> = (mouseDown) => {
  return (
    <>
      <div
        className={style.nw_resizer}
        onMouseDown={mouseDown.nwOnMouseDown}
      ></div>
      <div
        className={style.n_resizer}
        onMouseDown={mouseDown.nOnMouseDown}
      ></div>
      <div
        className={style.ne_resizer}
        onMouseDown={mouseDown.neOnMouseDown}
      ></div>
      <div
        className={style.e_resizer}
        onMouseDown={mouseDown.eOnMouseDown}
      ></div>
      <div
        className={style.se_resizer}
        onMouseDown={mouseDown.seOnMouseDown}
      ></div>
      <div
        className={style.s_resizer}
        onMouseDown={mouseDown.sOnMouseDown}
      ></div>
      <div
        className={style.sw_resizer}
        onMouseDown={mouseDown.swOnMouseDown}
      ></div>
      <div
        className={style.w_resizer}
        onMouseDown={mouseDown.wOnMouseDown}
      ></div>
    </>
  );
};

import { FC } from "react";
import style from "./CloseBtn.module.scss";
import { IconIO } from "../../Icon/Icon";

interface ICloseBtnProps {
  close: (...args: any) => void;
}

export const CloseBtn: FC<ICloseBtnProps> = ({ close }) => {
  return (
    <div className={style.btn} onClick={close}>
      <IconIO name="FaXmark" />
    </div>
  );
};

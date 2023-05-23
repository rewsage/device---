import { FC } from "react";
import { TypeButtons } from "../../../../../../shared/Types/device.type";
import style from "./LineButtons.module.scss";
import { ButtonDevice } from "../../../../../UI/Device/ButtonDevice/ButtonDevice";

export const LineButtons: FC<{ buttons: TypeButtons[] }> = ({ buttons }) => {
  return (
    <div className={style.container}>
      {buttons.map((button, index) =>
        button ? (
          <ButtonDevice mode={button.style} key={button.title}>
            {button.title}
          </ButtonDevice>
        ) : (
          <div className={style.empty} key={index}></div>
        )
      )}
    </div>
  );
};

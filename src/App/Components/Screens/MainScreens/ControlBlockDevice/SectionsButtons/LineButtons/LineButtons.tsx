import { FC } from "react";
import { TypeButtons } from "../../../../../../shared/Types/device.type";
import style from "./LineButtons.module.scss";
import { ButtonDevice } from "../../../../../UI/Device/ButtonDevice/ButtonDevice";
import { useLazyHandleButtonQuery } from "../../../../../../services/deviceApi/buttons.api";

export const LineButtons: FC<{ buttons: TypeButtons[] }> = ({ buttons }) => {
  const [trigger] = useLazyHandleButtonQuery();
  return (
    <div className={style.container}>
      {buttons.map((button, index) =>
        button ? (
          <ButtonDevice
            mode={button.style}
            key={button.id}
            onClick={() => trigger(button.id)}
          >
            {button.title}
          </ButtonDevice>
        ) : (
          <div className={style.empty} key={index}></div>
        )
      )}
    </div>
  );
};

import { FC } from "react";
import { TypeButtons } from "../../../../../../shared/Types/device.type";
import style from "./LineButtons.module.scss";
import { ButtonDevice } from "../../../../../UI/Device/ButtonDevice/ButtonDevice";
import { useLazyHandleButtonQuery } from "../../../../../../services/deviceApi/buttons.api";
import parse from "html-react-parser";

export const LineButtons: FC<{ buttons: TypeButtons[] }> = ({ buttons }) => {
  const [trigger] = useLazyHandleButtonQuery();
  return (
    <tr className={style.container}>
      {buttons.map((button, index) =>
        button ? (
          <td>
            <ButtonDevice
              mode={button.style}
              key={button.id}
              onClick={() => trigger(button.id)}
            >
              {parse(button.title)}
            </ButtonDevice>
          </td>
        ) : (
          <td className={style.empty} key={index}></td>
        )
      )}
    </tr>
  );
};

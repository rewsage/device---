import { TypeButtons } from "../../../../../../../../shared/Types/device.type";
import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import BusyField from "./BusyField/BusyField";
import EmptyField from "./EmptyField/EmptyField";
import style from "./LineButtons.module.scss";
import { useLineButtons } from "./useLineButtons";

interface ILineButtonsProps {
  buttons: TypeButtons[];
  lineNumber: number;
  idSection: number;
  field: ControllerRenderProps<any, any>;
}

const LineButtons: FC<ILineButtonsProps> = ({
  buttons,
  lineNumber,
  idSection,
  field,
}) => {
  const { createButtonDevice, deleteButtonDevice } = useLineButtons(field);
  return (
    <div className={style.line}>
      {buttons.map((button, index) =>
        button ? (
          <BusyField
            key={index}
            button={button}
            createButtonDevice={createButtonDevice}
            deleteButtonDevice={deleteButtonDevice}
            idSection={idSection}
            index={index}
            lineNumber={lineNumber}
          />
        ) : (
          <EmptyField
            key={index}
            index={index}
            lineNumber={lineNumber}
            createButtonDevice={createButtonDevice}
            idSection={idSection}
          />
        )
      )}
    </div>
  );
};

export default LineButtons;

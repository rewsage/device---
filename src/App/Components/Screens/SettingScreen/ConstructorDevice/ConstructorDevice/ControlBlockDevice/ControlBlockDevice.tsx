import { ISectionButtons } from "../../../../../../shared/Types/device.type";
import { FC, MouseEvent, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import style from "./ControlBlockDevice.module.scss";
import SectionsConstructor from "./SectonsConstructor/SectionsConstructor";
import { Icon, IconLucide } from "../../../../../UI/Icon/Icon";
import { Tooltip } from "../../../../../UI/Tooltip/Tooltip";

interface IControlBlockDeviceProps {
  addSection: () => void;
  removeSection: (id: number) => void;
  field: ControllerRenderProps<any, any>;
  buttons: ISectionButtons[];
}

const ControlBlockDevice: FC<IControlBlockDeviceProps> = ({
  field,
  addSection,
  removeSection,
  buttons,
}) => {
  //   const [showTooltip, setShowTooltip] = useState(false);
  //   const [event, setEvent] = useState<MouseEvent | null>(null);

  //   const toggleTooltip = (e: MouseEvent) => {
  //     // setEvent(e);
  //     setShowTooltip((prev) => !prev);
  //   };
  return (
    <div className={style.container}>
      <div>
        {buttons.map((section) => (
          <SectionsConstructor
            removeSections={removeSection}
            section={section}
            key={section.idSection}
            field={field}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={addSection}
        // onMouseEnter={(e) => toggleTooltip(e)}
        // onMouseLeave={(e) => toggleTooltip(e)}
      >
        <Icon name="plus" />
      </button>
      {/* {showTooltip && (
        <Tooltip text={"Добавить новую секцию"} e={event || undefined} />
      )} */}
    </div>
  );
};

export default ControlBlockDevice;

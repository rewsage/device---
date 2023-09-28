import { ISectionButtons } from "../../../../../../shared/Types/device.type";
import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import style from "./ControlBlockDevice.module.scss";
import SectionsConstructor from "./SectonsConstructor/SectionsConstructor";
import { IconLucide } from "../../../../../UI/Icon/Icon";

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

      <button type="button" onClick={addSection}>
        <IconLucide name="plus" size={40}/>
      </button>
    </div>
  );
};

export default ControlBlockDevice;

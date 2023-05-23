import { FC } from "react";
import { ISectionButtons } from "../../../../shared/Types/device.type";
import style from "./ControlBlockDevice.module.scss";
import { SectionsButtons } from "./SectionsButtons/SectionsButtons";

export const ControlBlockDevice: FC<{ buttons: ISectionButtons[] }> = ({
  buttons,
}) => {
  return (
    <div className={style.container}>
      {buttons.map((section) => (
        <SectionsButtons section={section} key={section.idSection} />
      ))}
    </div>
  );
};

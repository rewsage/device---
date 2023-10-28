import { FC } from "react";
import style from "./Buttons.module.scss";
import { IInstrumentsButtons } from "../../../../../../../shared/Types/device.type";
import { SectionsButtons } from "../../../../ControlBlockDevice/SectionsButtons/SectionsButtons";

export const Buttons: FC<{ device: IInstrumentsButtons }> = ({ device }) => {
  return (
    <div className={style.buttons}>
      {device.sections.map((section) => (
        <SectionsButtons section={section} key={section.idSection} />
      ))}
    </div>
  );
};

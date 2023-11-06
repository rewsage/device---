import { FC } from "react";
import style from "./SectionButtons.module.scss";
import { ISectionButtons } from "../../../../../shared/Types/device.type";
import { LineButtons } from "./LineButtons/LineButtons";

export const SectionsButtons: FC<{ section: ISectionButtons }> = ({
  section,
}) => {
  return (
    <table className={style.section}>
      {section.buttons.map((line, index) => (
        <LineButtons buttons={line} key={index} />
      ))}
    </table>
  );
};

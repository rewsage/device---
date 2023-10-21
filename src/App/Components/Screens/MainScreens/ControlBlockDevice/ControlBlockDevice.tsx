import { FC } from "react";
import style from "./ControlBlockDevice.module.scss";
import { SectionsButtons } from "./SectionsButtons/SectionsButtons";
import { useStateSelector } from "../../../../hooks/useStateSelector";

export const ControlBlockDevice: FC = () => {
  const focusDevice = useStateSelector((state) => state.device.focusDevice);
  return (
    <>
      {focusDevice && (
        <div className={style.buttons}>
          <div className={style.container}>
            {focusDevice.sections.map((section) => (
              <SectionsButtons section={section} key={section.idSection} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

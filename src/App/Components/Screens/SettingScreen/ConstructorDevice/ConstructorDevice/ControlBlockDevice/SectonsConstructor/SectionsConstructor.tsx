import { ISectionButtons } from "../../../../../../../shared/Types/device.type";
import { FC } from "react";
import { ControllerRenderProps } from "react-hook-form";
import LineButtons from "./LineButtons/LineButtons";
import style from "./SectionConstructor.module.scss";
import { useSectionConstructor } from "./useSectionConstructor";
import { IconLucide } from "../../../../../../UI/Icon/Icon";

interface ISectionConstructorProps {
  section: ISectionButtons;
  removeSections: (id: number) => void;
  field: ControllerRenderProps<any, any>;
}

const SectionsConstructor: FC<ISectionConstructorProps> = ({
  section,
  removeSections,
  field,
}) => {
  const {
    addLineButtons,
    removeLineButtons,
    addColumnButtons,
    removeColumnButtons,
  } = useSectionConstructor(field);

  return (
    <div className={style.container}>
      <button type="button" onClick={() => removeSections(section.idSection)}>
        <IconLucide name="trash-2" />
      </button>
      <div className={style.fields}>
        {section.buttons.map((item, index) => (
          <LineButtons
            buttons={item}
            key={index}
            lineNumber={index}
            idSection={section.idSection}
            field={field}
          />
        ))}
      </div>
      <div className={style.buttons}>
        <button
          type="button"
          onClick={() => removeLineButtons(section.idSection)}
          className={style.top_button}
        >
          <IconLucide name="trash-2" />
        </button>
        <button
          type="button"
          onClick={() => addColumnButtons(section.idSection)}
          className={style.right_button}
        >
          <IconLucide name="plus" />
        </button>
        <button
          type="button"
          onClick={() => addLineButtons(section.idSection)}
          className={style.bottom_button}
        >
          <IconLucide name="plus" />
        </button>
        <button
          type="button"
          onClick={() => removeColumnButtons(section.idSection)}
          className={style.left_button}
        >
          <IconLucide name="trash-2" />
        </button>
      </div>
    </div>
  );
};

export default SectionsConstructor;

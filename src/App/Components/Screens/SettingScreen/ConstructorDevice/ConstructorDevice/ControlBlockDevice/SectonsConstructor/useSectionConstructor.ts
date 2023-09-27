import {
  IButtonDevices,
  ISectionButtons,
} from "../../../../../../../shared/Types/device.type";
import { ControllerRenderProps } from "react-hook-form";

export const useSectionConstructor = (
  field: ControllerRenderProps<any, any>
) => {
  const addLineButtons = (id: number) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === id
    );
    if (!section || section.buttons.length === 5) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== id
          ? section
          : {
              ...section,
              buttons: [
                ...section.buttons,
                new Array(section.buttons[0].length).fill(null),
              ],
            }
      ),
    ]);
  };

  const removeLineButtons = (id: number) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === id
    );
    if (!section || section.buttons.length === 1) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== id
          ? section
          : {
              ...section,
              buttons: [
                ...section.buttons.slice(0, section.buttons.length - 1),
              ],
            }
      ),
    ]);
  };

  const addColumnButtons = (id: number) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === id
    );
    if (!section || section.buttons[0].length === 5) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== id
          ? section
          : {
              ...section,
              buttons: [...section.buttons.map((item) => [...item, null])],
            }
      ),
    ]);
  };

  const removeColumnButtons = (id: number) => {
    const section = (field.value as ISectionButtons[]).find(
      (section) => section.idSection === id
    );
    if (!section || section.buttons[0].length === 2) return;

    field.onChange([
      ...(field.value as ISectionButtons[]).map((section) =>
        section.idSection !== id
          ? section
          : {
              ...section,
              buttons: [
                ...section.buttons.map((item) => [
                  ...item.slice(0, item.length - 1),
                ]),
              ],
            }
      ),
    ]);
  };

  return {
    addLineButtons,
    removeLineButtons,
    addColumnButtons,
    removeColumnButtons,
  };
};

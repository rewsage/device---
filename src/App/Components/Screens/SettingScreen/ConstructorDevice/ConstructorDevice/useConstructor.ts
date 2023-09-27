import { ISectionButtons } from "../../../../../shared/Types/device.type";

import { ControllerRenderProps } from "react-hook-form";

export const useConstructor = (field: ControllerRenderProps<any, any>) => {
  const addSection = () => {
    field.onChange([
      ...field.value,
      {
        buttons: [[null, null]],
        idSection: Math.random(),
      } as ISectionButtons,
    ]);
  };

  const removeSection = (id: number) => {
    field.onChange([
      ...(field.value as ISectionButtons[]).filter(
        (section) => section.idSection !== id
      ),
    ]);
  };

  return {
    addSection,
    removeSection,
  };
};

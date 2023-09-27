import { useEffect } from "react";
import { IButtonDevices } from "../../../../../../../../../../shared/Types/device.type";
import { UseFormSetValue } from "react-hook-form";

export const useUpdateButtonDevice = (
  setValue: UseFormSetValue<IButtonDevices>,
  data: IButtonDevices
) => {
  useEffect(() => {
    setValue("id", data.id);
    setValue("style", data.style);
    setValue("title", data.title);
  }, [data, setValue]);
};

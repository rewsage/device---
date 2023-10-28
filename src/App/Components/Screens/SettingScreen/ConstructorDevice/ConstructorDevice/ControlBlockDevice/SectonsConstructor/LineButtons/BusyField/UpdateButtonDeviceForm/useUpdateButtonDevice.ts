import { useEffect } from "react";
import { IButtonDevices } from "../../../../../../../../../../shared/Types/device.type";
import { UseFormSetValue } from "react-hook-form";
import { CreateButton } from "../../../../../../ConstructorDevice.interface";

export const useUpdateButtonDevice = (
  setValue: UseFormSetValue<NonNullable<CreateButton>>,
  data: IButtonDevices
) => {
  useEffect(() => {
    setValue("token", data.token);
    setValue("style", data.style);
    setValue("title", data.title);
  }, [data, setValue]);
};

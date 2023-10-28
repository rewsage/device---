import { SubmitHandler, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateDeviceMutation,
  useGetDeviceQuery,
  useUpdateDeviceMutation,
} from "../../../../services/deviceApi/device.api";
import { useEffect, useState } from "react";
import { useLatest } from "../../../../hooks/useLatest";
import { IConstructor } from "./ConstructorDevice.interface";
import { useLocation } from "react-router-dom";

export const useConstructorDevice = (
  setValue: UseFormSetValue<IConstructor>,
  watch: UseFormWatch<IConstructor>
) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const type = useLatest<"create" | "update">(
    !id || id === "new" ? "create" : "update"
  );
  const { data, isFetching, isSuccess } = useGetDeviceQuery(Number(id), {
    skip: type === "create",
  });
  const [updateLoading, setUpdateIsLoading] = useState(false);
  const location = useLocation();

  //   const { clear } = useFormPersist("sessionStorage/Constructor", {
  //     watch,
  //     setValue,
  //     storage: sessionStorageWrapper,
  //   });

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("host", data.host);
      setValue("port", data.port);
      setValue("type", data.id);
      setValue("sections", data.sections);
    } else {
      setValue("name", "");
      if (location?.state?.host) {
        setValue("host", location.state.host);
      } else setValue("host", "");
      setValue("port", 5900);
      setValue("type", "new");
      setValue("sections", []);
    }
  }, [isSuccess, data]);

  const [updateDevice] = useUpdateDeviceMutation();
  const [createDevice] = useCreateDeviceMutation();

  const onSubmit: SubmitHandler<IConstructor> = async (data) => {
    try {
      setUpdateIsLoading(true);
      let response;
      if (type === "create") {
        response = await createDevice({ data });
      } else {
        response = await updateDevice({ data, id: Number(id) });
      }
      setUpdateIsLoading(false);
      console.log(response);
      //   clear();
      navigate("/setting/devices", { replace: true });
    } catch (error) {
      setUpdateIsLoading(false);
      console.error(error);
    }
  };

  return { onSubmit, isFetching, updateLoading };
};

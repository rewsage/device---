import {
  SubmitHandler,
  UseFormSetValue,
  UseFormGetValues,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateDeviceMutation,
  useGetDeviceQuery,
  useLazyGetButtonsQuery,
  useUpdateDeviceMutation,
} from "../../../../services/deviceApi/device.api";
import { useEffect, useState } from "react";
import { useLatest } from "../../../../hooks/useLatest";
import { CreateButton, IConstructor } from "./ConstructorDevice.interface";
import { useLocation } from "react-router-dom";
import { IConstructorDevice } from "./ConstructorDevice/constructorDevice.interface";
import {
  ISectionButtons,
  TypeButtons,
  TypeStyleButtonDevice,
} from "../../../../shared/Types/device.type";

export const useConstructorDevice = (
  setValue: UseFormSetValue<IConstructor>
) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getStyle = (bg: string): TypeStyleButtonDevice => {
    let style: TypeStyleButtonDevice = "default";
    switch (bg) {
      case "#5CCA9D":
        style = "green";
        break;

      case "#545465":
        style = "default";
        break;
      case "#EBEBF4":
        style = "gray";
        break;
      default:
        break;
    }

    return style;
  };

  const [getButtons, { dataButtons, isFetchingButtons, isSuccessButtons }] =
    useLazyGetButtonsQuery({
      selectFromResult: ({ data, isFetching, isSuccess }) => {
        const resData: ISectionButtons[] = [];
        if (!data) {
          return {
            dataButtons: [],
            isFetchingButtons: isFetching,
            isSuccessButtons: isSuccess,
          };
        }

        try {
          for (let i = 0; i < data.ToolbarRegions.length; i++) {
            const section = data.ToolbarRegions[i];
            const countColumn = Number(section.ToolbarRegionColumns);
            const countRow = Number(section.ToolbarRegionRows);

            const array: TypeButtons[][] = new Array(countRow).fill([
              ...new Array(countColumn).fill(null),
            ]);

            for (let j = 0; j < section.Buttons.length; j++) {
              const [x, y] =
                section.Buttons[j].ToolbarButtonRegionCell.split(",");
              const numberX = Number(x);
              const numberY = Number(y);

              if (Array.isArray(array[numberX])) {
                const row = [...array[numberX]];
                row.splice(numberY, 1, {
                  title: section.Buttons[j].ToolbarButtonLabel,
                  token: section.Buttons[j].ToolbarButtonId,
                  style: getStyle(section.Buttons[j].ToolbarButtonBGColor),
                  id: Math.random(),
                });
                array.splice(numberX, 1, [...row]);
              }
            }

            resData.push({ buttons: array, idSection: Math.random() });
          }
        } catch (error) {
          console.error(error);
          return {
            dataButtons: [],
            isFetchingButtons: isFetching,
            isSuccessButtons: isSuccess,
          };
        }

        return {
          dataButtons: resData,
          isFetchingButtons: isFetching,
          isSuccessButtons: isSuccess,
        };
      },
    });

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
      console.log(data);
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

  useEffect(() => {
    if (dataButtons) {
      setValue("sections", dataButtons);
    }
  }, [isSuccessButtons]);

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
      //   clear();
      navigate("/setting/devices", { replace: true });
    } catch (error) {
      setUpdateIsLoading(false);
      console.error(error);
    }
  };

  return {
    onSubmit,
    getButtons,
    isFetching,
    updateLoading: updateLoading || isFetchingButtons,
  };
};

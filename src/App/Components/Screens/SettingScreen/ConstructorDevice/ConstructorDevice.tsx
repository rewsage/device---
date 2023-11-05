import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IConstructor } from "./ConstructorDevice.interface";
import style from "./Constructor.module.scss";
import TextField from "../../../UI/TextField/TextField";
import { Button } from "../../../UI/Button/Button";
import Select from "../../../UI/Combobox/Combobox";
import { IOption } from "../../../UI/Combobox/combobox.interface";
import ButtonsConstructor from "./ButtonsConstructor/ButtonsConstructor";
import ConstructorDevice from "./ConstructorDevice/ConstructorDevice";
import { useConstructorDevice } from "./useConstructorDevice";
import { Portal } from "../../../Providers/Portal/Portal";
import { Modal } from "../../../UI/Modal/Modal";
import { Loading } from "../../../UI/Loading/Loading";
import { useGetAllDevicesQuery } from "../../../../services/deviceApi/device.api";
import { regIPv4 } from "../../../../shared/Regular/ip.validate";
import { Alert } from "../../../UI/Msg/Alert/Alert";

const Constructor: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IConstructor>({ mode: "onChange" });

  const [isAlert, setAlert] = useState(false);

  const { isFetching, onSubmit, updateLoading, getButtons } =
    useConstructorDevice(setValue);
  const {
    data,
    isLoading: isLoadingType,
    allData,
  } = useGetAllDevicesQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      data: data?.map(
        (item) =>
          ({ label: item.name, value: item.id } as IOption<number | string>)
      ),
      allData: data,
      isLoading: isLoading,
    }),
  });

  const typeSections = watch("type");

  const toggleGetButtons = () => {
    const currentHost = getValues("host");
    if (errors.host) {
      setAlert(true);
      return;
    }
    getButtons(currentHost);
  };

  useEffect(() => {
    if (typeof typeSections === "string") return setValue("sections", []);
    if (allData) {
      const device = allData.find((item) => item.id === typeSections);
      if (device) setValue("sections", device.sections);
    }
  }, [typeSections]);

  return (
    <div className={style.screen}>
      {isFetching ||
        (updateLoading && (
          <Portal>
            <Modal isClosesModal={false} close={() => {}} isActive>
              <Loading />
            </Modal>
          </Portal>
        ))}
      {isAlert && (
        <Alert
          show={setAlert}
          text="Хост прибора не верно введен, или не введен вообще"
          title="Ошибка"
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.left}>
          <TextField
            placeholder="Название прибора"
            error={errors.name}
            margin="30px 0 50px 0"
            {...register("name", { required: "Введите название прибора!" })}
          />
          <Controller
            control={control}
            name="type"
            render={({ field, fieldState: { error } }) => (
              <Select
                field={field}
                isLoading={isLoadingType}
                isMulti={false}
                placeholder="Выберите кнопки"
                options={[
                  { label: "Новый прибор", value: "new" },
                  ...(data ? data : []),
                ]}
                error={error}
              />
            )}
            rules={{
              required: { value: true, message: "Выбеерите тип прибора!" },
            }}
          />
          <TextField
            placeholder="Host"
            error={errors.host}
            margin="50px 0 0 0"
            {...register("host", {
              required: "Введите хост прибора!",
              pattern: {
                value: regIPv4,
                message: "Введите корректное значение",
              },
            })}
          />
          <TextField
            placeholder="Port"
            error={errors.port}
            type="number"
            margin="50px 0 0 0"
            {...register("port", {
              required: "Введите порт прибора!",
            })}
          />

          <ButtonsConstructor />

          <div className={style.buttons}>
            <Button type="submit" icon="edit">
              Сохранить
            </Button>
            <Button type="button" onClick={toggleGetButtons}>
              Загрузить кнопки
            </Button>
          </div>
        </div>
        <div className={style.right}>
          <Controller
            control={control}
            name="sections"
            defaultValue={[]}
            render={({ field, fieldState: { error } }) => (
              <ConstructorDevice
                field={field}
                placeholder="Кнопки"
                error={error}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default Constructor;

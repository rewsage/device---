import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IConstructor } from "./ConstructorDevice.interface";
import useFormPersist from "react-hook-form-persist";
import { sessionStorageWrapper } from "../../../../utils/storage-wrapper.utils";

import style from "./Constructor.module.scss";
import TextField from "../../../UI/TextField/TextField";
import { Button } from "../../../UI/Button/Button";

const ConstructorDevice: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IConstructor>({ mode: "onChange" });

  useFormPersist("sessionStorage/Constructor", {
    watch,
    setValue,
    storage: sessionStorageWrapper,
  });

  const onSubmit: SubmitHandler<IConstructor> = (data) => {
    console.log(data);
  };

  return (
    <div className={style.screen}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.left}>
          <TextField
            placeholder="Название прибора"
            error={errors.name}
            {...register("name", { required: "Введите название прибора!" })}
          />
          {/* <Controller
            control={control}
            name="type"
            render={({ field, fieldState: { error } }) => (
              <DynamicSelector
                field={field}
                isLoading={false}
                isMulti={false}
                placeholder="Выберите кнопки"
                options={dataOptions}
                error={error}
              />
            )}
          /> */}
          {/* <div className={style.right}>
            <ButtonsConstructor />
          </div> */}
          <Button type="submit">Создать</Button>
        </div>

        {/* <Controller
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
        /> */}
      </form>
    </div>
  );
};

export default ConstructorDevice;

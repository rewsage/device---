import {
  IButtonDevices,
  TypeStyleButtonDevice,
} from "../../../../../../../../../../shared/Types/device.type";
import Field from "../../../../../../../../../UI/TextField/TextField";
import { FC, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import style from "./CreateButtonDeviceForm.module.scss";
import Combobox from "../../../../../../../../../UI/Combobox/Combobox";
import { buttonsOptionData } from "./StyleButtonsSelect.data";
import { Button } from "../../../../../../../../../UI/Button/Button";
import { stopPropagate } from "../../../../../../../../../../utils/stopPropagate.utils";
import { TypeCreateButtonDevice } from "../../useLineButtons.inderface";
import { CreateButton } from "../../../../../../ConstructorDevice.interface";

interface ICreateButtonDeviceFormProps {
  createButtonDevice: TypeCreateButtonDevice;
  setActiveModal: (prev: boolean) => void;
  idSection: number;
  lineNumber: number;
  index: number;
  styleButton: TypeStyleButtonDevice;
}

const CreateButtonDeviceForm: FC<ICreateButtonDeviceFormProps> = ({
  setActiveModal,
  createButtonDevice,
  idSection,
  index,
  lineNumber,
  styleButton,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<NonNullable<CreateButton>>({ mode: "onChange" });

  const updateButton: SubmitHandler<NonNullable<CreateButton>> = (data) => {
    createButtonDevice(data, idSection, lineNumber, index);
    setActiveModal(false);
  };

  useEffect(() => {
    setValue("style", styleButton);
  }, [styleButton, setValue]);

  return (
    <form
      className={style.form}
      onSubmit={stopPropagate(handleSubmit(updateButton))}
    >
      <span className={style.title}>Создание кнопки</span>
      <Field
        placeholder="Title"
        error={errors.title}
        {...register("title", {
          required: "Введите title кнопки",
          maxLength: {
            value: 10,
            message: "Title должен быть меньше 10 символов",
          },
        })}
      />
      <Field
        placeholder="Token"
        error={errors.token}
        {...register("token", { required: "Введите token кнопки!" })}
      />
      <Controller
        control={control}
        name="style"
        defaultValue={"default"}
        render={({ field, fieldState: { error } }) => (
          <Combobox
            field={field}
            isLoading={false}
            isMulti={false}
            placeholder={"Стиль кнопки"}
            error={error}
            options={buttonsOptionData}
          />
        )}
      />
      <div className={style.buttons}>
        <Button type="submit" icon="plus">
          Создать
        </Button>
        <Button type="button" onClick={() => setActiveModal(false)}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default CreateButtonDeviceForm;

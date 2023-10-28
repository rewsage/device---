import Combobox from "../../../../../../../../../UI/Combobox/Combobox";
import Field from "../../../../../../../../../UI/TextField/TextField";
import { Button } from "../../../../../../../../../UI/Button/Button";
import { IButtonDevices } from "../../../../../../../../../../shared/Types/device.type";
import { stopPropagate } from "../../../../../../../../../../utils/stopPropagate.utils";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { buttonsOptionData } from "../../EmptyField/CreateButtonDeviceForm/StyleButtonsSelect.data";
import {
  TypeCreateButtonDevice,
  TypeDeleteButtonDevice,
} from "../../useLineButtons.inderface";
import style from "./UpdateButtonDeviceForm.module.scss";
import { useUpdateButtonDevice } from "./useUpdateButtonDevice";
import { CreateButton } from "../../../../../../ConstructorDevice.interface";

interface IUpdateButtonDeviceForm {
  createButtonDevice: TypeCreateButtonDevice;
  deleteButtonDevice: TypeDeleteButtonDevice;
  setActiveModal: (prev: boolean) => void;
  idSection: number;
  lineNumber: number;
  index: number;
  button: IButtonDevices;
}

const UpdateButtonDeviceForm: FC<IUpdateButtonDeviceForm> = ({
  createButtonDevice,
  deleteButtonDevice,
  idSection,
  index,
  lineNumber,
  setActiveModal,
  button,
}) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<NonNullable<CreateButton>>({ mode: "onChange" });

  useUpdateButtonDevice(setValue, button);

  const updateButton: SubmitHandler<NonNullable<CreateButton>> = (data) => {
    createButtonDevice(data, idSection, lineNumber, index);
    setActiveModal(false);
  };

  const deleteButton = () => {
    deleteButtonDevice(idSection, lineNumber, index);
  };
  return (
    <form
      className={style.form}
      onSubmit={stopPropagate(handleSubmit(updateButton))}
    >
      <span className={style.title}>Изменение кнопки</span>
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
        placeholder="Token кнопки"
        error={errors.token}
        {...register("token", { required: "Введите token кнопки!" })}
      />
      <Controller
        control={control}
        name="style"
        defaultValue="default"
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
        <Button type="submit" icon="edit">
          Сохранить
        </Button>
        <Button type="button" icon="delete" onClick={deleteButton}>
          Удалить кнопку
        </Button>
        <Button type="button" onClick={() => setActiveModal(false)}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default UpdateButtonDeviceForm;

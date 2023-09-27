import { Modal } from "../../../../../../../../UI/Modal/Modal";
import { BUTTON_DRAG_CONSTRUCTOR } from "../../../../../../../../../shared/Constants/Constants";
import {
  IButtonDevices,
  TypeStyleButtonDevice,
} from "../../../../../../../../../shared/Types/device.type";
import { FC, useState } from "react";
import { useDrop } from "react-dnd";
import { TypeCreateButtonDevice } from "../useLineButtons.inderface";
import CreateButtonDeviceForm from "./CreateButtonDeviceForm/CreateButtonDeviceForm";
import style from "./EmptyField.module.scss";
import { IconLucide } from "../../../../../../../../UI/Icon/Icon";

interface IEmptyFieldProps {
  lineNumber: number;
  index: number;
  idSection: number;
  createButtonDevice: TypeCreateButtonDevice;
}

const EmptyField: FC<IEmptyFieldProps> = (props) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [styleButton, setStyleButton] =
    useState<TypeStyleButtonDevice>("default");

  const [{ isOVer }, drop] = useDrop(() => ({
    accept: BUTTON_DRAG_CONSTRUCTOR,
    drop: (item: IButtonDevices) => {
      setStyleButton(item.style);
      setIsActiveModal(true);
    },
    collect: (monitor) => ({ isOVer: !!monitor.isOver() }),
  }));
  return (
    <>
      <div
        ref={drop}
        className={style.empty_field}
        onClick={() => setIsActiveModal(true)}
        style={isOVer ? { opacity: 0.5 } : {}}
      >
        <IconLucide name="plus" />
      </div>
      <Modal
        isActive={isActiveModal}
        isClosesModal
        close={() => setIsActiveModal(false)}
      >
        <CreateButtonDeviceForm
          {...props}
          setActiveModal={setIsActiveModal}
          styleButton={styleButton}
        />
      </Modal>
    </>
  );
};

export default EmptyField;

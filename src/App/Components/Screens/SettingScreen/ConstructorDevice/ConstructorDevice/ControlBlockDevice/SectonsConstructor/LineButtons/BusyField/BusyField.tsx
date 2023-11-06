import { IButtonDevices } from "../../../../../../../../../shared/Types/device.type";
import { FC, useState } from "react";
import style from "./BusyField.module.scss";
import cn from "classnames";
import { Modal } from "../../../../../../../../UI/Modal/Modal";
import UpdateButtonDeviceForm from "./UpdateButtonDeviceForm/UpdateButtonDeviceForm";
import {
  TypeDeleteButtonDevice,
  TypeCreateButtonDevice,
} from "../useLineButtons.inderface";
import { Portal } from "../../../../../../../../Providers/Portal/Portal";
import parse from "html-react-parser";

interface IBusyFieldProps {
  button: IButtonDevices;
  index: number;
  lineNumber: number;
  idSection: number;
  createButtonDevice: TypeCreateButtonDevice;
  deleteButtonDevice: TypeDeleteButtonDevice;
}

const BusyField: FC<IBusyFieldProps> = (props) => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <td className={style.busy_field} onClick={() => setIsActiveModal(true)}>
      <div
        className={cn(style.button, {
          [style.button_green]: props.button.style === "green",
          [style.button_grey]: props.button.style === "gray",
        })}
      >
        {parse(props.button.title)}
      </div>
      <Portal>
        <Modal
          isActive={isActiveModal}
          isClosesModal
          close={() => setIsActiveModal(false)}
        >
          <UpdateButtonDeviceForm
            {...props}
            setActiveModal={setIsActiveModal}
          />
        </Modal>
      </Portal>
    </td>
  );
};

export default BusyField;

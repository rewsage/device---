import { FC } from "react";
import style from "./Alert.module.scss";
import { Portal } from "../../../Providers/Portal/Portal";
import { Modal } from "../../Modal/Modal";
import { IAlert } from "./Alert.interface";
import { CloseBtn } from "../CloseBtn/CloseBtn";
import { Icon } from "../../Icon/Icon";
import { ButtonMsg } from "../ButtonMsg/ButtonMsg";

export const Alert: FC<IAlert> = ({
  show,
  text,
  title,
  icon,
  isClosesModal,
  ...props
}) => {
  const close = () => {
    show(false);
  };
  return (
    <Portal>
      <Modal close={close} isActive={true} isClosesModal={isClosesModal}>
        <div className={style.alert} {...props}>
          <div className={style.header}>
            <div className={style.title}>{title}</div>
            <CloseBtn close={close} />
          </div>
          <div className={style.body}>
            <div className={style.icon}>
              {icon ? (
                <Icon name={icon} className={style.warning} />
              ) : (
                <Icon name="warning" className={style.warning} />
              )}
            </div>
            <div className={style.text}>{text}</div>
          </div>
          <div className={style.btn}>
            <ButtonMsg fn={close}>Ok</ButtonMsg>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};

import { FC, useState } from "react";
import { IConfirm } from "./Confirm.interface";
import { Portal } from "../../../Providers/Portal/Portal";
import style from "./Confirm.module.scss";
import { CloseBtn } from "../CloseBtn/CloseBtn";
import { Icon } from "../../Icon/Icon";
import { ButtonMsg } from "../ButtonMsg/ButtonMsg";
import { Modal } from "../../Modal/Modal";

export const Confirm: FC<IConfirm> = ({
  text,
  title,
  icon,
  fn,
  type,
  textPositiveBtn,
  show,
  isClosesModal = false,
  ...props
}) => {
  const close = () => {
    show(false);
  };

  const positive = () => {
    show(false);
    fn();
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
                icon
              ) : type ? (
                type === "delete" && (
                  <Icon name="delete" className={style.delete_icon} />
                )
              ) : (
                <></>
              )}
            </div>
            <div className={style.right}>
              <div className={style.text}>{text}</div>
              <div className={style.container_button}>
                <ButtonMsg fn={positive}>
                  {textPositiveBtn
                    ? textPositiveBtn
                    : type
                    ? type === "delete" && (
                        <span className={style.delete_btn}>Удалить</span>
                      )
                    : "Ок"}
                </ButtonMsg>
                <ButtonMsg fn={close}>Отмена</ButtonMsg>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Portal>
  );
};

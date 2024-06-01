import { FC, PropsWithChildren } from "react";
import style from "./Notify.module.scss";
import { Notify } from "./Notify";
import { INotify } from "./Notify.interface";

export interface INotifyWrapperProps {
  notifyList: INotify[];
  removeNotify: (id: string) => void;
}

export const NotifyWrapper: FC<PropsWithChildren<INotifyWrapperProps>> = ({
  notifyList,
  removeNotify,
  children,
}) => {
  return (
    <>
      {children}
      <div className={style.wrapper}>
        {notifyList.map((notify) => (
          <Notify {...notify} close={removeNotify} key={notify.id} />
        ))}
      </div>
    </>
  );
};

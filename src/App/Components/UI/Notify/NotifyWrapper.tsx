import { FC, PropsWithChildren, useEffect, useState } from "react";
import style from "./Notify.module.scss";
import { Notify } from "./Notify";
import { INotify } from "./Notify.interface";

export const NotifyWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotify[]>([]);
  const [id, setId] = useState(0);

  const show = (notify: Omit<INotify, "idNotify">) => {
    setNotifications((prev) => [...prev, { ...notify, idNotify: id }]);
    setId(id + 1);
  };

  const hide = (id: number) => {
    setNotifications((oldArray) =>
      oldArray.filter((notify) => notify.idNotify !== id)
    );
  };

  return (
    <>
      {children}
      <div className={style.wrapper}>
        {notifications.map((notify) => (
          <Notify {...notify} close={hide} key={notify.idNotify} />
        ))}
      </div>
    </>
  );
};

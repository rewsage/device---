import { FC, PropsWithChildren } from "react";
import { useNotify } from "./useNotify";
import style from "./Notify.module.scss";
import { Notify } from "./Notify";

export const NotifyWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { notifications, hide } = useNotify();
  console.log(notifications);
  return (
    <>
      {children}
      <div className={style.wrapper}>
        {notifications.map((notify) => (
          <Notify {...notify} close={hide} key={notify.id} />
        ))}
      </div>
    </>
  );
};

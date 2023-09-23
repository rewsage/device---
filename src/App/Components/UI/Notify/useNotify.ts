import { INotify } from "./Notify.interface";
import {  useState } from "react";

export const useNotify = () => {
  const [notifications, setNotifications] = useState<INotify[]>([]);
  const [id, setId] = useState(0);

  const show = (notify: Omit<INotify, "idNotify">) => {
    setId((prev) => prev + 1);
    setNotifications((prev) => [...prev, { ...notify, idNotify: id }]);
    console.log(notifications);
  };

  const hide = (id: number) => {
    setNotifications((oldArray) =>
      oldArray.filter((notify) => notify.idNotify !== id)
    );
  };

  return { notifications, show, hide };
};

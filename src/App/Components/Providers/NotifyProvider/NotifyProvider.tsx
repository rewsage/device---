import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { INotify } from "../../UI/Notify/Notify.interface";
import { NotifyWrapper } from "../../UI/Notify/NotifyWrapper";
import { removeNotify } from "./utils";

export interface INotifyMethods {
  add: (notify: INotify) => void;
  remove: (id: string) => void;
}

export const NotifyContext = createContext<INotifyMethods | null>(null);

export const NotifyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifyList, setNotifyList] = useState<INotify[]>([]);

  const add = useCallback((notify: INotify) => {
    const { id } = notify;

    setNotifyList((prevNotifyList) => {
      const nextNotifyList = removeNotify(prevNotifyList, id);
      nextNotifyList.push(notify);

      return nextNotifyList;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setNotifyList((prevNotifyList) => removeNotify(prevNotifyList, id));
  }, []);

  const notifyMethods = useMemo(
    () => ({
      add,
      remove,
    }),
    [add, remove]
  );

  return (
    <NotifyContext.Provider value={notifyMethods}>
      <NotifyWrapper notifyList={notifyList} removeNotify={remove}>
        {children}
      </NotifyWrapper>
    </NotifyContext.Provider>
  );
};

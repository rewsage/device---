import { useContext } from "react";
import {
  INotifyMethods,
  NotifyContext,
} from "../Components/Providers/NotifyProvider/NotifyProvider";

export const useNotify = (): INotifyMethods => {
  const notifyMethods = useContext(NotifyContext);

  if (notifyMethods === null) {
    throw new Error("Notify: `useNotify` hook is used out of context");
  }

  return notifyMethods;
};

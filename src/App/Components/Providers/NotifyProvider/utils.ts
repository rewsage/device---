import { INotify } from "../../UI/Notify/Notify.interface";

export const removeNotify = (notifyList: INotify[], id: string) => {
  return notifyList.filter((notify) => notify.id !== id);
};

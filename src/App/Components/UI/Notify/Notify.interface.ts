import { HTMLAttributes } from "react";

export interface INotifyProps {
  id: string;
  title?: string;
  text?: string;
  autoHide?: boolean;
  isError?: boolean;
  defaultHideTimeout?: number;
}

type INotifyHTML = HTMLAttributes<HTMLDivElement> & INotifyProps;

export interface INotify extends INotifyHTML {}

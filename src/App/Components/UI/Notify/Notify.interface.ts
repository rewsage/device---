import { HTMLAttributes } from "react";

export interface INotifyProps {
  title: string;
  text: string;
  idNotify: number;
  autoHide?: boolean;
  isError?: boolean;
  defaultHideTimeout?: number;
}

type INotifyHTML = HTMLAttributes<HTMLDivElement> & INotifyProps;

export interface INotify extends INotifyHTML {}

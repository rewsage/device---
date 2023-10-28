import { HTMLAttributes, ReactElement } from "react";

interface IConfirmProps {
  title: string;
  text: string;
  show: (value: boolean) => void;
  fn: (...args: any) => void;
  icon?: ReactElement;
  type?: "delete";
  textPositiveBtn?: string;
  isClosesModal?: boolean;
}

type IConfirmHTML = HTMLAttributes<HTMLDivElement> & IConfirmProps;

export interface IConfirm extends IConfirmHTML {}

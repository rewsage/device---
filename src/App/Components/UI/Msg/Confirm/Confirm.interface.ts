import { HTMLAttributes, ReactElement } from "react";
import { IconName } from "../../../../shared/Types/icon.type";

interface IConfirmProps {
  title: string;
  text: string;
  fn: (...args: any) => void;
  icon?: ReactElement;
  type?: "delete";
  textPositiveBtn?: string;
  isClosesModal?: boolean;
}

type IConfirmHTML = HTMLAttributes<HTMLDivElement> & IConfirmProps;

export interface IConfirm extends IConfirmHTML {}

import { HTMLAttributes, ReactElement } from "react";
import { IconName } from "../../../../shared/Types/icon.type";

interface IAlertProps {
  title: string;
  text: string;
  show: (value: boolean) => void;
  icon?: IconName;
  isClosesModal?: boolean;
}

type IAlertHTML = HTMLAttributes<HTMLDivElement> & IAlertProps;

export interface IAlert extends IAlertHTML {}

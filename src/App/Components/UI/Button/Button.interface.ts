import { ButtonHTMLAttributes } from "react";
import {  IconName } from "../../../shared/Types/icon.type";

interface IButtonProps {
  flat?: boolean;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
  tooltip?: string;
  icon?: IconName;
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButton extends IButtonHTML {}

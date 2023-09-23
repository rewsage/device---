import { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  flat?: boolean;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButton extends IButtonHTML {}

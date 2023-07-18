import { ButtonHTMLAttributes } from "react";

interface IButtonProps {
  flat?: boolean;
  loading?: boolean;
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps;

export interface IButton extends IButtonHTML {}

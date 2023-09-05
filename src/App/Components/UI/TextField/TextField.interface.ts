import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps {
  placeholder: string;
  error?: FieldError;
}

type TypeHtmlProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export interface IField extends TypeHtmlProps {}

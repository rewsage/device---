import { FC, forwardRef, useState } from "react";
import { IField } from "./TextField.interface";
import style from "./TextField.module.scss";
import cn from "classnames";

const TextField: FC<IField> = forwardRef<HTMLInputElement, IField>(
  ({ error, placeholder, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <div className={style.field}>
        <label
          htmlFor="textField"
          className={cn(style.placeholder, {
            [style.placeholder_focus]: isFocused,
          })}
        >
          {placeholder}
        </label>
        <input
          ref={ref}
          {...rest}
          id="textField"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div
          className={cn(style.line, {
            [style.isFocus]: isFocused,
            [style.line_error]: !!error,
          })}
        />
        {error && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

TextField.displayName = "Field";

export default TextField;

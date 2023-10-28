import { FC, useRef, useState } from "react";
import { OnChangeValue } from "react-select/dist/declarations/src";
import { IOption, ISelect } from "./combobox.interface";
import style from "./Combobox.module.scss";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import cn from "classnames";

const AnimatedComponents = makeAnimated();

const Select = <T,>({
  field,
  isLoading,
  isMulti,
  options,
  placeholder,
  margin,
  error,
}: ISelect<T>) => {
  let defaultActive: boolean = !!field.value;
  if (Array.isArray(field.value) && field.value.length === 0) {
    defaultActive = false;
  }

  const [isFocused, setIsFocused] = useState(false);
  const refField = useRef<HTMLDivElement>(null);

  if (margin) {
    if (refField.current) {
      refField.current.style.margin =
        typeof margin === "string" ? margin : margin + "px";
    }
  }

  const onChange = (newValue: unknown | OnChangeValue<IOption<T>, boolean>) => {
    field.onChange(
      isMulti
        ? (newValue as IOption<T>[]).map((val) => val.value)
        : (newValue as IOption<T>).value
    );
    setIsFocused(false);
  };

  const getValues = () => {
    if (field.value) {
      return isMulti
        ? options.filter((item) => field.value.includes(item.value))
        : options.find((item) => field.value === item.value);
    } else return isMulti ? [] : "";
  };

  return (
    <div className={style.select}>
      <label
        htmlFor="combobox"
        className={cn(style.placeholder, {
          [style.placeholder_focus]: defaultActive || isFocused,
        })}
      >
        {placeholder}
      </label>
      <ReactSelect
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder
        isLoading={isLoading}
        classNamePrefix="custom-select"
        value={getValues()}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        components={AnimatedComponents}
        inputId="combobox"
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
};

export default Select;

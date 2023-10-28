import { FC, MouseEvent, useState } from "react";
import { IButton } from "./Button.interface";
import style from "./Button.module.scss";
import cn from "classnames";
import { Tooltip } from "../Tooltip/Tooltip";
import { Icon } from "../Icon/Icon";

export const Button: FC<IButton> = ({
  children,
  flat,
  disabled,
  loading,
  width,
  height,
  tooltip,
  icon,
  ...props
}) => {
  let isActive = true;
  if (!tooltip || tooltip === "") isActive = false;
  const [showTooltip, setShowTooltip] = useState(false);
  const [event, setEvent] = useState<MouseEvent | null>(null);

  const toggleTooltip = (e: MouseEvent) => {
    if (!tooltip || tooltip === "") return;
    setEvent(e);
    setShowTooltip((prev) => !prev);
  };

  if (typeof width === "number") {
    width = width + "px";
  }
  if (typeof height === "number") {
    height = height + "px";
  }

  return (
    <>
      <button
        disabled={disabled}
        onMouseEnter={(e) => toggleTooltip(e)}
        onMouseLeave={(e) => toggleTooltip(e)}
        style={{ width, height }}
        {...props}
        className={cn(style.default, {
          [style.flat]: flat,
          [style.disabled]: disabled,
          [style.loading]: loading,
        })}
      >
        {icon ? (
          <span className={style.icon}>
            <Icon name={icon} />
            {children}
          </span>
        ) : (
          children
        )}
      </button>
      {showTooltip && <Tooltip text={tooltip || ""} e={event || undefined} />}
    </>
  );
};

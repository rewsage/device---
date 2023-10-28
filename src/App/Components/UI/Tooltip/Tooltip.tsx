import { FC, useEffect, useRef, useLayoutEffect } from "react";
import style from "./Tooltip.module.scss";
import { ITooltip } from "./Tooltip.interface";

export const Tooltip: FC<ITooltip> = ({ text, e }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mousemove = (e: MouseEvent) => {
    if (!ref.current) return;

    const tooltipWidth = ref.current.offsetWidth;
    const tooltipHeight = ref.current.offsetHeight;

    const body = document.body;
    const bodyWidth = body.clientWidth;
    const bodyHeight = body.clientHeight;

    const screenX = body.scrollLeft;
    const screenY = body.scrollTop;

    const screenXEnd = bodyWidth + screenX - tooltipWidth - 2;
    const screenYEnd = bodyHeight + screenY - tooltipHeight - 2;

    let tx = e.pageX + 15; //left
    let ty = e.pageY + 15; //top

    if (tx > screenXEnd) {
      tx = e.pageX - tooltipWidth - 5;
    }
    if (ty > screenYEnd) {
      ty = screenYEnd;
    }

    ref.current.style.transform = `translate(${tx}px, ${ty}px)`;
  };

  useEffect(() => {
    if (e && ref.current) {
      console.log(e);
      let tx = e.clientX + 15; //left
      let ty = e.clientY + 15; //top

      ref.current.style.transform = `translate(${tx}px, ${ty}px)`;
    }
    document.addEventListener("mousemove", mousemove);

    return document.addEventListener("mousemove", mousemove);
  }, []);

  return (
    <div className={style.tooltip} ref={ref}>
      {text}
    </div>
  );
};

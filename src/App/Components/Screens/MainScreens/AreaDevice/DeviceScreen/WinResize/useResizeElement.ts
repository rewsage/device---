import { MouseEvent, useRef, useState } from "react";

export const useResizeElement = (
  minWidth: number,
  minHeight: number,
) => {
  const win = useRef<HTMLDivElement>(null);
  const [onResize, setOnResize] = useState(false);

  //увеличение окна по высоте и ширине (верх + лево)
  const nwOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const y = e.clientY;

    const winEl = win.current;

    if (!winEl) return;

    const left = winEl.offsetLeft;
    const top = winEl.offsetTop;
    const width = winEl.offsetWidth;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaX = x - e.clientX;
      const deltaY = y - e.clientY;
      const newWidth = width + deltaX;
      const newHeight = height + deltaY;

      if (newWidth >= minWidth) {
        winEl.style.left = left - deltaX + "px";
        winEl.style.width = newWidth + "px";
      }
      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по высоте (верх)
  const nOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const y = e.clientY;
    const winEl = win.current;

    if (!winEl) return;

    const top = winEl.offsetTop;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaY = y - e.clientY;
      const newHeight = height + deltaY;

      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по высоте и ширине (верх + право)
  const neOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const y = e.clientY;

    const winEl = win.current;

    if (!winEl) return;

    const left = winEl.offsetLeft;
    const top = winEl.offsetTop;
    const width = winEl.offsetWidth;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaX = e.clientX - x;
      const deltaY = y - e.clientY;
      const newWidth = width + deltaX;
      const newHeight = height + deltaY;

      if (newWidth >= minWidth) {
        winEl.style.left = left - deltaX + "px";
        winEl.style.width = newWidth + "px";
        console.log(winEl.style.width);
      }
      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по ширине (право)
  const eOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const winEl = win.current;

    if (!winEl) return;
    const width = winEl.offsetWidth;

    document.onmousemove = function (e) {
      const deltaX = e.clientX - x;
      const newWidth = width + deltaX;

      if (newWidth >= minWidth) {
        winEl.style.width = newWidth + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по высоте и ширине (низ + право)
  const seOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const y = e.clientY;

    const winEl = win.current;

    if (!winEl) return;

    const left = winEl.offsetLeft;
    const top = winEl.offsetTop;
    const width = winEl.offsetWidth;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaX = e.clientX - x;
      const deltaY = e.clientY - y;
      const newWidth = width + deltaX;
      const newHeight = height + deltaY;

      if (newWidth >= minWidth) {
        winEl.style.left = left - deltaX + "px";
        winEl.style.width = newWidth + "px";
      }
      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по высоте (низ)
  const sOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const y = e.clientY;
    const winEl = win.current;

    if (!winEl) return;

    const top = winEl.offsetTop;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaY = e.clientY - y;
      const newHeight = height + deltaY;

      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по высоте и ширине (низ + лево)
  const swOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const y = e.clientY;

    const winEl = win.current;

    if (!winEl) return;

    const left = winEl.offsetLeft;
    const top = winEl.offsetTop;
    const width = winEl.offsetWidth;
    const height = winEl.offsetHeight;

    document.onmousemove = function (e) {
      const deltaX = x - e.clientX;
      const deltaY = e.clientY - y;
      const newWidth = width + deltaX;
      const newHeight = height + deltaY;

      if (newWidth >= minWidth) {
        winEl.style.left = left - deltaX + "px";
        winEl.style.width = newWidth + "px";
      }
      if (newHeight >= minHeight) {
        winEl.style.top = top - deltaY + "px";
        winEl.style.height = newHeight + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  // увеличение окна по ширине (лево)
  const wOnMouseDown = (e: MouseEvent) => {
    setOnResize(true);
    e.stopPropagation ? e.stopPropagation() : (e.cancelable = true);
    const x = e.clientX;
    const winEl = win.current;

    if (!winEl) return;
    const width = winEl.offsetWidth;

    document.onmousemove = function (e) {
      const deltaX = x - e.clientX;
      const newWidth = width + deltaX;

      if (newWidth >= minWidth) {
        winEl.style.width = newWidth + "px";
      }
    };
    document.onmouseup = function () {
      setOnResize(false);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  return {
    nwOnMouseDown,
    nOnMouseDown,
    neOnMouseDown,
    eOnMouseDown,
    seOnMouseDown,
    sOnMouseDown,
    swOnMouseDown,
    wOnMouseDown,
    onResize,
    win,
  };
};

import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const portal = document.getElementById("portal") as HTMLElement;

export const Portal: FC<PropsWithChildren> = ({ children }) =>
  createPortal(children, portal);

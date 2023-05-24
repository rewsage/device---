import { FC, RefObject, useEffect, useRef, useState } from "react";
import style from "./ScreenVNC.module.scss";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";
import RFB from "../../../../../../shared/noVNC/core/rfb";
import { getUrlVnc } from "../../../../../../utils/noVNC.utils";
import { Loading } from "../../../../../UI/Loading/Loading";

interface IScreenVNC {
  device: IInstrumentsButtons;
  screen: RefObject<HTMLDivElement>;
  loading: boolean;
}

export const ScreenVNC: FC<IScreenVNC> = ({ device, screen, loading }) => {
  return (
    <>
      <div ref={screen} className="novnc_canvas">
        {loading && <Loading />}
      </div>
    </>
  );
};

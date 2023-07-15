import { FC, RefObject, useEffect, useRef, useState } from "react";
import style from "./ScreenVNC.module.scss";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";
import { Loading } from "../../../../../UI/Loading/Loading";

interface IScreenVNC {
  device: IInstrumentsButtons;
  screen: RefObject<HTMLDivElement>;
  loading: boolean;
  connected: boolean;
  connect: () => void;
}

export const ScreenVNC: FC<IScreenVNC> = ({
  device,
  screen,
  loading,
  connected,
  connect,
}) => {
  console.log(connected);
  return (
    <div className={style.body_screen}>
      <div ref={screen} className="novnc_canvas"></div>
      {loading && (
        <div className={style.loading_container}>
          <Loading />
        </div>
      )}
      {!connected && !loading && (
        <div className={style.screen_placeholder}>
          <h1>Не удалось подключиться к прибору!</h1>
          <button onClick={() => connect()}>Переподключиться</button>
        </div>
      )}
    </div>
  );
};

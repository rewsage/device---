import { FC, RefObject, memo, useEffect, useRef, useState } from "react";
import style from "./ScreenVNC.module.scss";
import { Loading } from "../../../../../UI/Loading/Loading";

interface IScreenVNC {
  onResize: boolean;
  screen: RefObject<HTMLDivElement>;
  loading: boolean;
  connected: boolean;
  connect: () => void;
}

export const ScreenVNC: FC<IScreenVNC> = memo(
  ({ screen, onResize, connected, loading, connect }) => {
    return (
      <div className={style.body_screen}>
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
        {onResize && <div className={style.stub_resize} />}
        <div ref={screen} className={style.novnc_canvas}></div>
      </div>
    );
  }
);

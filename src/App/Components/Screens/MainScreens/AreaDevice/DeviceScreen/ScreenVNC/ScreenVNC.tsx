import { FC, RefObject, memo, forwardRef, useEffect } from "react";
import style from "./ScreenVNC.module.scss";
import { Loading } from "../../../../../UI/Loading/Loading";

interface IScreenVNC {
  onResize: boolean;
  loading: boolean;
  connected: boolean;
  connect: () => void;
  disconnect: () => void;
}

export const ScreenVNC = forwardRef<HTMLDivElement, IScreenVNC>(
  ({ onResize, connected, loading, connect, disconnect }, ref) => {
    useEffect(() => {
      connect();
      return () => disconnect();
    }, []);
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
        <div ref={ref} className={style.novnc_canvas} />
      </div>
    );
  }
);

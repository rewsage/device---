import { FC, RefObject, forwardRef } from "react";
import { Loading } from "../../../../../../UI/Loading/Loading";
import style from "./Screen.module.scss";

interface IScreenVNC {
  onResize: boolean;
  loading: boolean;
  connected: boolean;
  connect: () => void;
}

export const Screen = forwardRef<HTMLDivElement, IScreenVNC>(
  ({ onResize, connected, loading, connect }, ref) => {
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
        {/* {onResize && <div className={style.stub_resize} />} */}
        <div ref={ref} className={style.novnc_canvas} />
      </div>
    );
  }
);

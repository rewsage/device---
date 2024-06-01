import { FC, PropsWithChildren, useCallback, useEffect } from "react";
import { useNotify } from "../../../hooks/useNotify";
import {
  errorObservable,
  ErrorObserverCallback,
} from "../../../shared/Lib/ErrorObservable";

export const ErrorProvider: FC<PropsWithChildren> = ({ children }) => {
  const { add } = useNotify();

  const errorHandler: ErrorObserverCallback = useCallback(
    ({ id, title, message }) => {
      add({
        id,
        title,
        text: message,
      });
    },
    [add]
  );

  useEffect(() => {
    errorObservable.subscribe(errorHandler);

    return () => {
      errorObservable.unsubscribe(errorHandler);
    };
  }, [errorHandler]);

  return <>{children}</>;
};

import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { errorObservable } from "../../shared/Lib/ErrorObservable";

export const errorLoggerMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const requestId = action.meta.requestId;
      const title = action.error.name ?? "API Error";
      const message = action.error.message ?? "Unknown error occurred";

      errorObservable.alert({ id: requestId, title, message });
    }

    return next(action);
  };

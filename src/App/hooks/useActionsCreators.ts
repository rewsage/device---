import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch";
import { useMemo } from "react";

export const useActionsCreators = (actions: ActionCreatorsMapObject) => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

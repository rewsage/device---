import { RootState } from "./../store/store";

import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

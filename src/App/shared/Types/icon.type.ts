import { icons } from "../../Components/UI/Icon/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export type TypeIconsName = keyof typeof dynamicIconImports;
export type IconName = keyof typeof icons;

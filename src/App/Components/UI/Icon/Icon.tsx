import { ReactComponent as SettingIcon } from "../../../assets/Icons/Setting.svg";
import { ReactComponent as PlusIcon } from "../../../assets/Icons/Plus.svg";
import { ReactComponent as DeviceIcon } from "../../../assets/Icons/device.svg";
import * as MaterialIcons from "react-icons/fa6";
import { IconName, TypeMaterialIcons } from "../../../shared/Types/icon.type";
import { SVGProps } from "react";

export const icons = {
  setting: SettingIcon,
  plus: PlusIcon,
  device: DeviceIcon,
};

export const Icon = ({
  name,
  ...restProps
}: { name: IconName } & SVGProps<SVGSVGElement>) => {
  const Icon = icons[name];
  return <Icon {...restProps} />;
};

export const IconIO = ({
  name,
  ...props
}: { name: TypeMaterialIcons } & SVGProps<SVGAElement>) => {
  const Icon = MaterialIcons[name];
  return <Icon {...props} />;
};

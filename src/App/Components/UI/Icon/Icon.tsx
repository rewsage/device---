import { ReactComponent as SettingIcon } from "../../../assets/Icons/Setting.svg";
import { ReactComponent as PlusIcon } from "../../../assets/Icons/Plus.svg";
import { ReactComponent as DeviceIcon } from "../../../assets/Icons/device.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/Icons/devices.svg";
import { ReactComponent as NetworkIcon } from "../../../assets/Icons/network.svg";
import { ReactComponent as UsersIcon } from "../../../assets/Icons/users.svg";
import { ReactComponent as ButtonsIcon } from "../../../assets/Icons/buttons.svg";
import { ReactComponent as EditIcon } from "../../../assets/Icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/Icons/delete.svg";
import { ReactComponent as AddIcon } from "../../../assets/Icons/add.svg";
import * as MaterialIcons from "react-icons/fa6";
import { IconName, TypeMaterialIcons } from "../../../shared/Types/icon.type";
import { SVGProps } from "react";

export const icons = {
  setting: SettingIcon,
  plus: PlusIcon,
  device: DeviceIcon,
  devices: DevicesIcon,
  network: NetworkIcon,
  users: UsersIcon,
  buttons: ButtonsIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  add: AddIcon,
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

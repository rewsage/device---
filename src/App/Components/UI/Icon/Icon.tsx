import { ReactComponent as SettingIcon } from "../../../assets/Icons/Setting.svg";
import { ReactComponent as PlusIcon } from "../../../assets/Icons/Plus.svg";
import { ReactComponent as DeviceIcon } from "../../../assets/Icons/device.svg";
import { IconName } from "../../../shared/Types/icon.type";

export const icons = {
  setting: SettingIcon,
  plus: PlusIcon,
  device: DeviceIcon,
};

export const Icon = ({
  name,
  ...restProps
}: { name: IconName } & React.SVGProps<SVGSVGElement>) => {
  const Icons = icons[name];
  return <Icons {...restProps} />;
};

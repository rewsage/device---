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
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { IconName, TypeIconsName } from "../../../shared/Types/icon.type";
import { SVGProps, Suspense, lazy } from "react";

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

interface IconProps extends Omit<LucideProps, "ref"> {
  name: TypeIconsName;
}

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export const IconLucide = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

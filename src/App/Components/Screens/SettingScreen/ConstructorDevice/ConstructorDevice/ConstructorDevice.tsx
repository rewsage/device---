import { FC, memo } from "react";
import { IConstructorDevice } from "./constructorDevice.interface";
import style from "./ConstructorDevice.module.scss";
import ControlBlockDevice from "./ControlBlockDevice/ControlBlockDevice";
import { useConstructor } from "./useConstructor";

const ConstructorDevice: FC<IConstructorDevice> = memo(
  ({ field, placeholder, error }) => {
    const { addSection, removeSection } = useConstructor(field);
    return (
      <div className={style.container}>
        <ControlBlockDevice
          addSection={addSection}
          removeSection={removeSection}
          buttons={field.value}
          field={field}
        />
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (
      JSON.stringify(prevProps.field.value) ===
      JSON.stringify(nextProps.field.value)
    )
      return true;
    return false;
  }
);

ConstructorDevice.displayName = "ConstructorDevice";

export default ConstructorDevice;
import { FC } from "react";
import ButtonConstructor from "./ButtonConstructor/ButtonConstructor";
import { buttonsDataExample } from "./ButtonsConstructor.data";
import style from "./ButtonsConstructors.module.scss";

const ButtonsConstructor: FC = () => {
  return (
    <div className={style.container}>
      {buttonsDataExample.map((button) => (
        <ButtonConstructor button={button} key={button.id} />
      ))}
    </div>
  );
};

export default ButtonsConstructor;

import style from "./EmptyField.module.scss";
import { IGridProps } from "../Grid.interface";

export function EmptyField<T>({ textEmpty }: Pick<IGridProps<T>, "textEmpty">) {
  if (!textEmpty) textEmpty = "Пусто";
  return (
    <div className={style.field}>
      <span>{textEmpty}</span>
    </div>
  );
}

import { CSSProperties } from "react";
import style from "./Grid.module.scss";
import { IGridProps } from "./Grid.interface";
import { HeaderGrid } from "./HeaderGrid/HeaderGrid";
import { EmptyField } from "./EmptyFeild/EmptyField";
import { BodyGrid } from "./BodyGrid/BodyGrid";
import { GridLoader } from "./GridLoader/GridLoader";

export function Grid<T>(props: IGridProps<T>) {
  const tableStyle: CSSProperties = {};
  if (props.width)
    tableStyle.width =
      typeof props.width === "number" ? props.width + "px" : props.width;

  if (props.height)
    tableStyle.height =
      typeof props.height === "number" ? props.height + "px" : props.height;

  return (
    <div className={style.table} style={tableStyle}>
      <HeaderGrid {...props} />
      {props.isLoading ? (
        <GridLoader LoaderCmp={props.loaderCmp} />
      ) : props.data.length === 0 ? (
        <EmptyField textEmpty={props.textEmpty} />
      ) : (
        <BodyGrid {...props} />
      )}
    </div>
  );
}

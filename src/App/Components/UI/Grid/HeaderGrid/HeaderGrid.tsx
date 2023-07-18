import { IGridProps } from "../Grid.interface";
import style from "./HeaderGrid.module.scss";

export function HeaderGrid<T>({
  columns,
  numberingRecord,
}: Pick<IGridProps<T>, "columns" | "numberingRecord">) {
  return (
    <div className={style.thead}>
      <div className={style.row}>
        {numberingRecord && <div className={style.column_header}>#</div>}
        {columns.map((item) => (
          <div
            className={style.column_header}
            key={item.title}
            style={
              typeof item.width === "number"
                ? { width: item.width + "px" }
                : { width: item.width }
            }
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

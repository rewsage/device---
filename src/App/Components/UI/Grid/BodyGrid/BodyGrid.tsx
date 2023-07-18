import { IGridProps } from "../Grid.interface";
import style from "./BodyGrid.module.scss";
import { useBodyGrid } from "./useBodyGrid";

export function BodyGrid<T>({
  columns,
  data,
  onInputBlur,
  numberingRecord,
}: Omit<IGridProps<T>, "textEmpty">) {
  const {
    editingIndex,
    handleDblValueClick,
    handleInputBlur,
    handleInputChange,
    editValue,
  } = useBodyGrid({ columns, onInputBlur });

  if (!numberingRecord && typeof numberingRecord !== "boolean")
    numberingRecord = false;

  return (
    <div className={style.body}>
      {data.map((record, index) => (
        <div key={index} className={style.row}>
          {numberingRecord && <div className={style.value}>{index}</div>}
          {columns.map((column, columnIndex) => (
            <div
              style={
                typeof column.width === "number"
                  ? { width: column.width + "px" }
                  : { width: column.width }
              }
              className={style.value}
              key={String(column.dataIndex)}
              onDoubleClick={() =>
                handleDblValueClick(
                  String(record[column.dataIndex]),
                  columnIndex
                )
              }
            >
              {columnIndex === editingIndex ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              ) : column.renderer ? (
                column.renderer(record[column.dataIndex], record)
              ) : (
                <>{record[column.dataIndex]}</>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

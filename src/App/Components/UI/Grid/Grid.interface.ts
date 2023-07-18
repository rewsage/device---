import { ReactNode } from "react";

export interface IGridProps<T> {
  data: T[];
  columns: IColumn<T>[];
  width?: number | string;
  height?: number | string;
  textEmpty?: string | ReactNode;
  isLoading?: boolean;
  loaderCmp?: ReactNode;
  numberingRecord?: boolean;
  onInputBlur?: (dataIndex: keyof T, value: string) => void;
}

export interface IColumn<T> {
  title: string;
  dataIndex: keyof T;
  renderer?: (value: T[keyof T], record: T) => ReactNode | string;
  editable?: boolean;
  width: number | string;
}

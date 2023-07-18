import { useState, ChangeEvent,  } from "react";
import { IGridProps } from "../Grid.interface";

export const useBodyGrid = <T>({
  columns,
  onInputBlur,
}: Pick<IGridProps<T>, "columns" | "onInputBlur">) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleDblValueClick = (value: string, index: number) => {
    if (columns[index].editable) {
      setEditingIndex(index);
      setEditValue(value);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    if (onInputBlur && typeof editingIndex === "number")
      onInputBlur(columns[editingIndex].dataIndex, editValue);
    setEditingIndex(null);
  };

  return {
    handleDblValueClick,
    handleInputChange,
    handleInputBlur,
    editingIndex,
    editValue
  };
};

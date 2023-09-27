import { FormEvent } from "react";

export function stopPropagate(callback: (...args: any) => void) {
  return (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    callback();
  };
}

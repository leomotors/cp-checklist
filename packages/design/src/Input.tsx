import { FC, InputHTMLAttributes, PropsWithChildren } from "react";

import clsx from "clsx";

export interface InputProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={clsx(className, "rounded border border-gray-400 p-2")}
    />
  );
};

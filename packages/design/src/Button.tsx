import { FC, PropsWithChildren, memo } from "react";

import clsx from "clsx";

export interface ButtonProps extends PropsWithChildren {
  size?: "sm" | "lg";
  variant?: "solid" | "outline";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(function Button({
  children,
  onClick,
  size = "lg",
  variant = "solid",
}) {
  return (
    <button
      className={clsx(
        size === "lg" ? "p-4 text-xl font-bold" : "px-4 py-2 text-lg",
        variant === "solid"
          ? "bg-pink-400 text-white hover:bg-pink-500"
          : "border-2 border-pink-500 text-pink-500 hover:border-pink-600 hover:text-pink-600",
        "rounded-lg transition-colors"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

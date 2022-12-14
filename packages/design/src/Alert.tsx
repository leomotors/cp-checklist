import { FC, PropsWithChildren, memo } from "react";

import clsx from "clsx";

interface AlertProps extends PropsWithChildren {
  variant: "success" | "warning" | "error" | "info";
}

export const Alert: FC<AlertProps> = memo(({ children, variant }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-lg border py-4 pl-4 pr-6 text-black",
        variant === "success" && "border-green-500 bg-green-300",
        variant === "warning" && "border-yellow-500 bg-yellow-300",
        variant === "error" && "border-red-500 bg-red-300",
        variant === "info" && "border-blue-500 bg-blue-300"
      )}
    >
      {children}
    </div>
  );
});

Alert.displayName = "Alert";

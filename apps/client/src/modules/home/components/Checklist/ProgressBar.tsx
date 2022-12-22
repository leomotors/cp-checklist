import { FC } from "react";

import clsx from "clsx";

interface ProgressBarProps {
  satisfied: number;
  total: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ satisfied, total }) => {
  const percent = Math.min(1, satisfied / total);

  return (
    <div
      className={clsx(
        "h-4 w-64 max-w-[75%] rounded-lg border border-black",
        percent >= 0.8 && "bg-green-400",
        percent < 0.8 && percent >= 0.5 && "bg-yellow-400",
        percent < 0.5 && "bg-red-400"
      )}
    >
      <div
        className={clsx(
          "h-full rounded-lg bg-green-500",
          percent >= 0.8 && "bg-green-500",
          percent < 0.8 && percent >= 0.5 && "bg-yellow-500",
          percent < 0.5 && "bg-red-500"
        )}
        style={{
          width: `${percent * 100}%`,
        }}
      />
    </div>
  );
};

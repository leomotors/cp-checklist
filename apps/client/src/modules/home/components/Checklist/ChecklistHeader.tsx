import { FC } from "react";

import clsx from "clsx";

import { ProgressBar } from "./ProgressBar";

interface ChecklistHeaderProps {
  bgColor: string;
  name: string;
  satisfiedCredits: number;
  totalCredits: number;
}

export const ChecklistHeader: FC<ChecklistHeaderProps> = ({
  bgColor,
  name,
  satisfiedCredits,
  totalCredits,
}) => {
  return (
    <div
      className={clsx(
        bgColor,
        "flex items-center justify-between gap-4 rounded-xl px-4 py-2"
      )}
    >
      <p className="text-xl font-bold">{name}</p>

      <div className="flex flex-1 items-center justify-end gap-2">
        <ProgressBar satisfied={satisfiedCredits} total={totalCredits} />

        <p className="font-bold">
          {satisfiedCredits} / {totalCredits} หน่วยกิต
        </p>
      </div>
    </div>
  );
};

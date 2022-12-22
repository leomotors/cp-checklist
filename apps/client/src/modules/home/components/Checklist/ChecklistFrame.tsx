import { FC, PropsWithChildren } from "react";

import clsx from "clsx";

import { ComputedCategory } from "@cp-checklist/constants";

import { ChecklistHeader } from "./ChecklistHeader";

interface ChecklistFrameProps extends PropsWithChildren {
  computed: Pick<
    ComputedCategory,
    "name" | "satisfiedCredits" | "totalCredits"
  >;
  isNested?: boolean;
}

export const ChecklistFrame: FC<ChecklistFrameProps> = ({
  children,
  computed,
  isNested,
}) => {
  const { name, satisfiedCredits, totalCredits } = computed;
  const isSatisfied = satisfiedCredits >= totalCredits;

  return (
    <div
      className={clsx(
        isNested || (isSatisfied ? "bg-green-400" : "bg-red-400"),
        isNested && (isSatisfied ? "bg-green-200" : "bg-red-200"),
        "rounded-xl"
      )}
    >
      <ChecklistHeader
        bgColor={clsx(
          isNested || (isSatisfied ? "bg-green-500" : "bg-red-500"),
          isNested && (isSatisfied ? "bg-green-300" : "bg-red-300")
        )}
        name={name}
        satisfiedCredits={satisfiedCredits}
        totalCredits={totalCredits}
      />

      <div className="flex flex-col gap-2 p-4">{children}</div>
    </div>
  );
};

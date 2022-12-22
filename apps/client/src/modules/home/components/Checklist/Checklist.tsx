import { FC } from "react";

import { PublicCourse } from "@cp-checklist/codegen";
import { ComputedCategory, TopCategory } from "@cp-checklist/constants";

import { CourseCard } from "../CourseCard";

import { ChecklistFrame } from "./ChecklistFrame";

interface ChecklistProps {
  computed: TopCategory<ComputedCategory>;
  isNested?: boolean;
  coursesData: Record<string, PublicCourse>;
}

export const Checklist: FC<ChecklistProps> = ({
  computed,
  coursesData,
  isNested,
}) => {
  if ("categories" in computed && computed.categories) {
    return (
      <ChecklistFrame
        computed={{
          ...computed,
          satisfiedCredits: computed.categories.reduce(
            (prev, curr) => (prev += curr.satisfiedCredits),
            0
          ),
        }}
        isNested={isNested}
      >
        {computed.categories.map((category) => (
          <Checklist
            key={category.name}
            computed={category}
            coursesData={coursesData}
            isNested
          />
        ))}
      </ChecklistFrame>
    );
  }

  const fuck = computed as ComputedCategory;

  return (
    <ChecklistFrame computed={fuck} isNested={isNested}>
      {fuck.condition === "all" ? (
        <>
          {fuck.courseIds.map((id) => (
            <CourseCard
              key={id}
              checklistStatus={fuck.satisfied.includes(id)}
              course={coursesData[id]}
            />
          ))}
        </>
      ) : (
        <>
          {fuck.satisfied.map((id) => (
            <CourseCard key={id} checklistStatus course={coursesData[id]} />
          ))}
        </>
      )}
    </ChecklistFrame>
  );
};

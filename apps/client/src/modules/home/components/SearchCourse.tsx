/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FC, useMemo } from "react";

import debounce from "lodash/debounce";

import {
  useAddCourseMutation,
  useSearchCoursesLazyQuery,
} from "@cp-checklist/codegen";

import { Modal } from "$core/components";

interface SearchCourseProps {
  showModal: boolean;
  semesterId: string;
  onClose: (mutate?: boolean) => unknown;
}

export const SearchCourse: FC<SearchCourseProps> = ({
  onClose,
  semesterId,
  showModal,
}) => {
  const [search, { data }] = useSearchCoursesLazyQuery();
  const [addCourse] = useAddCourseMutation();

  const debouncedSearch = useMemo(
    () =>
      debounce(
        (query: string) =>
          search({
            variables: {
              query,
              take: 10,
            },
          }),
        500
      ),
    [search]
  );

  function onUpdate(query: string) {
    debouncedSearch(query);
  }

  async function handleAdd(courseNo: string) {
    await addCourse({
      variables: {
        courseNo,
        semesterId,
      },
    });

    onClose(true);
  }

  return (
    <Modal showModal={showModal} onClickOutside={onClose}>
      <div className="flex h-[80vh] flex-col gap-4">
        <input
          ref={(el) => el?.focus()}
          className="w-[60vw] rounded-lg border border-gray-400 bg-white p-4"
          type="text"
          onChange={(e) => onUpdate(e.currentTarget.value)}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
        />

        {(data?.searchCourses.length ?? 0) > 0 && (
          <div
            className="flex w-[60vw] flex-col gap-2 rounded-lg bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {data?.searchCourses.map((course) => (
              <button
                key={course.courseNo}
                className="rounded-md p-2 text-left transition-colors hover:bg-gray-200"
                onClick={() => handleAdd(course.courseNo)}
              >
                {course.courseNo} {course.courseNameEn}
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};

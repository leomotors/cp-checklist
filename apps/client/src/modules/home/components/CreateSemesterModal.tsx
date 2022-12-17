/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Modal } from "$core/components";
import { useCreateSemesterMutation } from "@cp-checklist/codegen";
import { Button } from "@cp-checklist/design";
import { FC, useState } from "react";

interface CreateSemesterModalProps {
  showModal: boolean;
  onClose: (mutate?: boolean) => unknown;
}

export const CreateSemesterModal: FC<CreateSemesterModalProps> = ({
  onClose,
  showModal,
}) => {
  const [createSemester] = useCreateSemesterMutation();

  const [year, setYear] = useState(1);
  const [semester, setSemester] = useState(1);

  async function handleCreate() {
    await createSemester({
      variables: {
        year,
        semester,
      },
    });

    onClose(true);
  }

  return (
    <Modal showModal={showModal} onClickOutside={onClose}>
      <div
        className="flex flex-col gap-4 rounded-lg bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl font-bold">Create Semester</p>

        <select
          className="rounded border border-gray-400 p-2"
          value={year}
          onChange={(e) => setYear(+e.currentTarget.value)}
        >
          {Array.from(Array(8).keys()).map((i) => (
            <option key={i} value={i + 1}>
              Year {i + 1}
            </option>
          ))}
        </select>

        <select
          className="rounded border border-gray-400 p-2"
          value={semester}
          onChange={(e) => setSemester(+e.currentTarget.value)}
        >
          <option value="1">ภาคต้น</option>
          <option value="2">ภาคปลาย</option>
          <option value="3">ภาคฤดูร้อน</option>
        </select>

        <Button onClick={handleCreate}>Create</Button>
      </div>
    </Modal>
  );
};

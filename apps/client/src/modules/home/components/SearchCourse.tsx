import { Modal } from "$core/components";
import { FC } from "react";

interface SearchCourseProps {
  showModal: boolean;
  onClose?: () => unknown;
}

export const SearchCourse: FC<SearchCourseProps> = ({ onClose, showModal }) => {
  return (
    <Modal showModal={showModal} onClickOutside={() => onClose?.()}>
      <div className="flex h-[80vh] flex-col gap-4">
        <input
          className="w-[60vw] rounded-lg border border-gray-400 bg-white p-4"
          type="text"
        />
      </div>
    </Modal>
  );
};

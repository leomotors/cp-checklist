/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FC, PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  showModal: boolean;
  onClickOutside: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  onClickOutside,
  showModal,
}) => {
  if (showModal) {
    return (
      <div
        className="fixed inset-0 z-50 bg-[#C4C4C4]/[0.8] backdrop-blur-sm"
        onClick={onClickOutside}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

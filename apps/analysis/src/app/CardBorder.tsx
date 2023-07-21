"use client";

import { FC, PropsWithChildren, ReactNode } from "react";

import { useLocalStorage } from "./useLocalStorage";

type CardBorderProps = PropsWithChildren & {
  title: ReactNode;
  storageKey: string;
};

export const CardBorder: FC<CardBorderProps> = ({
  children,
  storageKey,
  title,
}) => {
  const [isOpen, setIsOpen] = useLocalStorage(storageKey, true);

  return (
    <>
      <header className="flex justify-between">
        {title}
        <button
          className="rounded-lg bg-black px-4 py-2 text-lg font-bold text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </header>

      {isOpen && children}
    </>
  );
};

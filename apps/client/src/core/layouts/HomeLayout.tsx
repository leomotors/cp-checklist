import { FC, PropsWithChildren } from "react";

import Link from "next/link";

import { useUser } from "$modules/authentication";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  const { resetToken } = useUser();

  return (
    <div className="flex flex-col">
      <nav className="sticky top-0 z-[100] flex h-16 w-full items-center justify-evenly p-2 backdrop-blur-sm">
        <Link className="text-xl font-bold" href="/">
          CP Checklist
        </Link>

        <button onClick={() => resetToken()}>Logout</button>
      </nav>

      <div className="pt-16">{children}</div>
    </div>
  );
};

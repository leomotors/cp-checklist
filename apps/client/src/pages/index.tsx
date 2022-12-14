import Link from "next/link";

import { Button } from "@cp-checklist/design";

import { MyPage } from "$core/@types";

const IndexPage: MyPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">
        CP Checklist
      </h1>

      <p className="text-center text-4xl font-bold">
        Are you ready to graduate checklist for CP
      </p>

      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </main>
  );
};

IndexPage.authStatus = "public";

export default IndexPage;

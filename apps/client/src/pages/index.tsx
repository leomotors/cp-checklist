import { Github } from "react-bootstrap-icons";

import Link from "next/link";

import { GitHubLink } from "@cp-checklist/constants";
import { Button } from "@cp-checklist/design";

import { MyPage } from "$core/@types";

const IndexPage: MyPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-pink-500">CP Checklist</h1>

      <p className="text-center text-4xl font-bold">
        Are you ready to graduate checklist for CP 🥗
      </p>

      <Link href="/login">
        <Button>Login</Button>
      </Link>

      <div className="flex items-center gap-2 text-2xl">
        <p>Open Source at</p>
        <a
          className="flex items-center gap-2 font-bold transition-colors hover:text-slate-700"
          href={GitHubLink}
          rel="noreferrer"
          target="_blank"
        >
          GitHub <Github />
        </a>
      </div>
    </main>
  );
};

IndexPage.authStatus = "public";

export default IndexPage;

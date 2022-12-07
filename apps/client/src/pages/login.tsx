import { useState } from "react";

import { useLoginMutation } from "@cp-checklist/codegen";
import { Button } from "@cp-checklist/design";

import { MyPage } from "$core/@types";

import { useUser } from "$modules/authentication";

const LoginPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();

  const { setToken } = useUser();

  async function attemptLogin() {
    const { data } = await login({
      variables: {
        username,
        password,
      },
    });

    // todo error handling

    const token = data?.login.token;

    if (token) {
      setToken(token);
    }
  }

  return (
    <main className="flex flex-col">
      <label>Username</label>
      <input
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <Button onClick={attemptLogin}>Submit</Button>
    </main>
  );
};

LoginPage.authStatus = "redirect";

export default LoginPage;

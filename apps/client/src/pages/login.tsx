import { useState } from "react";

import { useLoginMutation } from "@cp-checklist/codegen";
import { Alert, Button, Input } from "@cp-checklist/design";

import { MyPage } from "$core/@types";
import { apolloError } from "$core/utils";
import { useUser } from "$modules/authentication";

const LoginPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login] = useLoginMutation();

  const { setToken } = useUser();

  async function attemptLogin() {
    try {
      const { data } = await login({
        variables: {
          username,
          password,
        },
      });

      const token = data?.login.token;

      if (token) {
        setToken(token);
      }
    } catch (err) {
      setError(apolloError(err));
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">
        Login
      </h1>

      {error && <Alert variant="error">{error}</Alert>}

      <form className="flex flex-col gap-2">
        <label className="font-bold">Username</label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value.toLowerCase())}
        />
        <label className="font-bold">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </form>

      <Button onClick={attemptLogin}>Submit</Button>
    </main>
  );
};

LoginPage.authStatus = "redirect";

export default LoginPage;

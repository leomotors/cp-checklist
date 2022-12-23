import { useState } from "react";

import { useLoginMutation, useRegisterMutation } from "@cp-checklist/codegen";
import { Alert, Button, Input } from "@cp-checklist/design";

import { MyPage } from "$core/@types";
import { apolloError } from "$core/utils";
import { useUser } from "$modules/authentication";

const LoginPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

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

  async function handleRegister() {
    try {
      const { data } = await register({
        variables: {
          username,
          password,
        },
      });

      const token = data?.register.token;

      if (token) {
        setToken(token);
      }
    } catch (err) {
      setError(apolloError(err));
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-6xl font-bold text-pink-500">Login</h1>

      {error && <Alert variant="error">{error}</Alert>}

      <form className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="login-username">
          Username
        </label>
        <Input
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value.toLowerCase())}
        />
        <label className="font-bold" htmlFor="login-password">
          Password
        </label>
        <Input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </form>

      <div className="flex gap-2">
        <Button onClick={attemptLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </main>
  );
};

LoginPage.authStatus = "redirect";

export default LoginPage;

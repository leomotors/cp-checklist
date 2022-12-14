import { Button } from "@cp-checklist/design";

import { MyPage } from "$core/@types";

import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { resetToken, username } = useUser();

  return (
    <main>
      Hello {username}
      <Button onClick={resetToken}>Logout</Button>
    </main>
  );
};

HomePage.authStatus = "private";

export default HomePage;

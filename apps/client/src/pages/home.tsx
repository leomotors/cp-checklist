import { MyPage } from "$core/@types";

import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { username } = useUser();

  return <main>Hello {username}</main>;
};

HomePage.authStatus = "private";

export default HomePage;

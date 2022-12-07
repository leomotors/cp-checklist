import { MyPage } from "$core/@types";

const HomePage: MyPage = () => {
  return <main>My homie</main>;
};

HomePage.authStatus = "private";

export default HomePage;

import { MyPage } from "$core/@types";

const LoginPage: MyPage = () => {
  return <main>Please login</main>;
};

LoginPage.authStatus = "redirect";

export default LoginPage;

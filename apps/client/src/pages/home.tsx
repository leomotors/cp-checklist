import { MyPage } from "$core/@types";

const HomePage: MyPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-8">
      <p>Navbar here</p>

      <h1>Are you ready to graduate?</h1>

      <p>placeholder for checklist</p>
    </main>
  );
};

HomePage.authStatus = "private";
HomePage.layout = "Home";

export default HomePage;

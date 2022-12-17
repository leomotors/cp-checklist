import { MyPage } from "$core/@types";
import { SearchCourse, SemesterCard } from "$modules/home";
import { useMySemestersQuery } from "@cp-checklist/codegen";
import { Button } from "@cp-checklist/design";
import { useState } from "react";

const HomePage: MyPage = () => {
  const { data } = useMySemestersQuery();
  const semesters = data?.mySemesters;

  // #region state
  const [showSearchModal, setShowSearchModal] = useState(false);
  // #endregion state

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        {semesters?.map((semester) => (
          <SemesterCard key={semester.id} semester={semester} />
        ))}
      </div>

      <Button onClick={() => setShowSearchModal(true)} />

      <SearchCourse
        showModal={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      />
    </main>
  );
};

HomePage.authStatus = "private";
HomePage.layout = "Home";

export default HomePage;

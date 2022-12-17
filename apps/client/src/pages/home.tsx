import { useState } from "react";

import { useMySemestersQuery } from "@cp-checklist/codegen";

import { MyPage } from "$core/@types";
import { CreateSemesterModal, SearchCourse, SemesterCard } from "$modules/home";
import { Button } from "@cp-checklist/design";

const HomePage: MyPage = () => {
  const { data, refetch } = useMySemestersQuery();
  const semesters = data?.mySemesters;

  // #region state
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [focusSemester, setFocusSemester] = useState<string>();

  const [showCreateSemesterModal, setShowCreateSemesterModal] = useState(false);
  // #endregion state

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {semesters?.map((semester) => (
          <SemesterCard
            key={semester.id}
            semester={semester}
            onAddCourse={(id) => {
              setFocusSemester(id);
              setShowSearchModal(true);
            }}
            onMutate={refetch}
          />
        ))}
      </div>

      <Button onClick={() => setShowCreateSemesterModal(true)}>
        Add Semester
      </Button>

      <SearchCourse
        semesterId={focusSemester ?? ""}
        showModal={showSearchModal}
        onClose={(mutate) => {
          setShowSearchModal(false);
          setFocusSemester(undefined);
          mutate && refetch();
        }}
      />

      <CreateSemesterModal
        showModal={showCreateSemesterModal}
        onClose={(mutate) => {
          setShowCreateSemesterModal(false);
          mutate && refetch();
        }}
      />
    </main>
  );
};

HomePage.authStatus = "private";
HomePage.layout = "Home";

export default HomePage;

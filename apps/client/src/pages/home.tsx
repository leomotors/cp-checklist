import { useMemo, useState } from "react";

import {
  useComputeChecklistQuery,
  useMySemestersQuery,
} from "@cp-checklist/codegen";
import { ComputedChecklist } from "@cp-checklist/constants";
import { Button } from "@cp-checklist/design";

import { MyPage } from "$core/@types";
import {
  Checklist,
  CreateSemesterModal,
  SearchCourse,
  SemesterCard,
} from "$modules/home/components";

const HomePage: MyPage = () => {
  const { data, refetch } = useMySemestersQuery();
  const semesters = data?.mySemesters;

  const { data: _checklist, refetch: refetchChecklist } =
    useComputeChecklistQuery();

  const checklist = useMemo(
    () =>
      _checklist &&
      (JSON.parse(_checklist.computeChecklist) as ComputedChecklist),
    [_checklist]
  );

  function onMutate() {
    refetch();
    refetchChecklist();
  }

  // #region state
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [focusSemester, setFocusSemester] = useState<string>();

  const [showCreateSemesterModal, setShowCreateSemesterModal] = useState(false);
  // #endregion state

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-8">
      <p className="text-xl font-bold">
        Credits Granted {checklist?.creditsGranted} / {checklist?.totalCredits}
      </p>

      <div className="flex max-w-4xl flex-col gap-2">
        {checklist?.computed.map((category) => (
          <Checklist
            key={category.name}
            computed={category}
            coursesData={checklist.coursesData}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        {semesters?.map((semester) => (
          <SemesterCard
            key={semester.id}
            semester={semester}
            onAddCourse={(id) => {
              setFocusSemester(id);
              setShowSearchModal(true);
            }}
            onMutate={onMutate}
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
          mutate && onMutate();
        }}
      />

      <CreateSemesterModal
        showModal={showCreateSemesterModal}
        onClose={(mutate) => {
          setShowCreateSemesterModal(false);
          mutate && onMutate();
        }}
      />
    </main>
  );
};

HomePage.authStatus = "private";
HomePage.layout = "Home";

export default HomePage;

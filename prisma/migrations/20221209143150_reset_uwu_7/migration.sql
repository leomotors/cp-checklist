-- CreateEnum
CREATE TYPE "GenEdType" AS ENUM ('SO', 'HU', 'SC', 'IN', 'NO');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raw_course" (
    "course_no" TEXT NOT NULL,
    "academic_year" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "study_program" TEXT NOT NULL,
    "abbr_name" TEXT NOT NULL,
    "course_name_en" TEXT NOT NULL,
    "course_name_th" TEXT NOT NULL,
    "course_desc_en" TEXT,
    "course_desc_th" TEXT,
    "course_condition" TEXT NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,
    "credit_hours" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "gen_ed_type" "GenEdType" NOT NULL
);

-- CreateTable
CREATE TABLE "course" (
    "course_no" TEXT NOT NULL,
    "abbr_name" TEXT NOT NULL,
    "course_name_en" TEXT NOT NULL,
    "course_name_th" TEXT NOT NULL,
    "course_desc_en" TEXT,
    "course_desc_th" TEXT,
    "course_condition" TEXT NOT NULL,
    "credit" DOUBLE PRECISION NOT NULL,
    "credit_hours" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "gen_ed_type" "GenEdType" NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("course_no")
);

-- CreateTable
CREATE TABLE "semester" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "semester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToSemester" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "raw_course_course_no_academic_year_semester_study_program_key" ON "raw_course"("course_no", "academic_year", "semester", "study_program");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToSemester_AB_unique" ON "_CourseToSemester"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToSemester_B_index" ON "_CourseToSemester"("B");

-- AddForeignKey
ALTER TABLE "semester" ADD CONSTRAINT "semester_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToSemester" ADD CONSTRAINT "_CourseToSemester_A_fkey" FOREIGN KEY ("A") REFERENCES "course"("course_no") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToSemester" ADD CONSTRAINT "_CourseToSemester_B_fkey" FOREIGN KEY ("B") REFERENCES "semester"("id") ON DELETE CASCADE ON UPDATE CASCADE;

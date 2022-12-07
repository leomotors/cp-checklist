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
CREATE TABLE "course" (
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

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "course_course_no_academic_year_semester_study_program_key" ON "course"("course_no", "academic_year", "semester", "study_program");

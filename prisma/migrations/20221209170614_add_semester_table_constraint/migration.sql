/*
  Warnings:

  - A unique constraint covering the columns `[year,semester,user_id]` on the table `semester` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "semester_year_semester_user_id_key" ON "semester"("year", "semester", "user_id");

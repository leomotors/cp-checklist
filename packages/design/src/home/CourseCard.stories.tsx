import { GenEdType } from "@cp-checklist/codegen";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { CourseCard as Component } from "./CourseCard";

export default {
  title: "Home / Course Card",
  component: Component,
  args: {
    course: {
      abbrName: "COM PROG",
      courseNameEn: "COMPUTER PROGRAMMING",
      courseNameTh: "การทำโปรแกรมคอมพิวเตอร์",
      courseDescEn: `Computer concepts, computer system components, hardware and softwae interaction, electronic information and data processing concepts; programming:
data type,operators, statements, control 
structures; programming tools; programming styles and conventions; debugging; program design and development with applications to engineering problems using a high level
language.`,
      courseDescTh: `มโนทัศน์ทางคอมพิวเตอร์ ส่วนประกอบของระบบคอมพิวเตอร์ การทำงานร่วมกันระหว่างฮาร์ดแวร์และซอฟต์แวร์ มโนทัศน์ทางการประมวลข้อมูลแบบอิเล็กทรอนิกส์ การทำโปรแกรม ประเภทข้อมูล ตัวปฏิบัติการ ข้อความสั่ง โครงสร้างควบคุม เครื่องมือต่างๆ ในการทำโปรแกรม แบบอย่างและสัญนิยมต่างๆ ในการทำโปรแกรม การตรวจแก้จุดบกพร่อง การออกแบบและพัฒนาโปรแกรมโดยใช้ภาษาระดับสูงเพื่อประยุกต์ใช้กับปัญหาทางด้านวิศวกรรม`,
      courseNo: "2110101",
      credit: 3,
      genEdType: GenEdType.No,
    },
  },
} satisfies ComponentMeta<typeof Component>;

export const CourseCard: ComponentStory<typeof Component> = (args) => (
  <div className="w-1/2">
    <Component {...args} />

    <p>Element underneath</p>
  </div>
);

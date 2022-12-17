import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { GenEdType } from "@cp-checklist/codegen";

import { CourseCard as Component } from "./CourseCard";

export default {
  title: "Home / Course Card",
  component: Component,
} satisfies ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <div className="w-1/2">
    <Component {...args} />

    <p>Element underneath</p>
  </div>
);

export const CP = Template.bind({});
CP.args = {
  course: {
    abbrName: "COM PROG",
    courseNameEn: "COMPUTER PROGRAMMING",
    courseNameTh: "การทำโปรแกรมคอมพิวเตอร์",
    courseDescEn: `Computer concepts, computer system components, hardware and softwae interaction, electronic information and data processing concepts; programming:
data type,operators, statements, control 
structures; programming tools; programming styles and conventions; debugging; program design and development with applications to engineering problems using a high level
language.`,
    courseDescTh:
      "มโนทัศน์ทางคอมพิวเตอร์ ส่วนประกอบของระบบคอมพิวเตอร์ การทำงานร่วมกันระหว่างฮาร์ดแวร์และซอฟต์แวร์ มโนทัศน์ทางการประมวลข้อมูลแบบอิเล็กทรอนิกส์ การทำโปรแกรม ประเภทข้อมูล ตัวปฏิบัติการ ข้อความสั่ง โครงสร้างควบคุม เครื่องมือต่างๆ ในการทำโปรแกรม แบบอย่างและสัญนิยมต่างๆ ในการทำโปรแกรม การตรวจแก้จุดบกพร่อง การออกแบบและพัฒนาโปรแกรมโดยใช้ภาษาระดับสูงเพื่อประยุกต์ใช้กับปัญหาทางด้านวิศวกรรม",
    courseNo: "2110101",
    credit: 3,
    genEdType: GenEdType.No,
  },
};

export const Engineer = Template.bind({});
Engineer.args = {
  course: {
    abbrName: "EXPL ENG WORLD",
    courseNameEn: "EXPLORING ENGINEERING WORLD",
    courseNameTh: "ท่องโลกวิศวกรรม",
    courseDescEn:
      "Engineering topics related to daily life: energy, resources, environment manufacturing, process, industry, material, automotive, infrastructure, information system and bio engineering",
    courseDescTh:
      "หัวข้อทางวิศวกรรมที่เกี่ยวข้องกับชีวิตประจำวัน ได้แก่ พลังงาน ทรัพยากร สิ่งแวดล้อม การผลิต กระบวนการอุตสาหกรรม วัสดุ ยานยนต์ โครงสร้างพื้นฐาน ระบบสารสนเทศ และวิศวกรรมชีวภาพ",
    courseNo: "2100111",
    credit: 3,
    genEdType: GenEdType.Sc,
  },
};

export const GenEd = Template.bind({});
GenEd.args = {
  course: {
    abbrName: "PHYS FILMS",
    courseNameEn: "PHYSICS IN FILMS",
    courseNameTh: "ฟิสิกส์ในภาพยนตร์",
    courseDescEn:
      "Fermi estimation; physics in action and superhero movies; motion of object; physics in adventure movies: electricity, magnetism, electromagnetic wave; physics in SciFi movies: nuclear technology, particle accelerator, modern physics.",
    courseDescTh:
      "การประมาณของเฟอร์มิ ฟิสิกส์ในภาพยนตร์ต่อสู้และยอดมนุษย์ ได้แก่ การเคลื่อนที่ของวัตถุ ฟิสิกส์ในภาพยนตร์ผจญภัย ได้แก่ ไฟฟ้า แม่เหล็ก คลื่นแม่เหล็กไฟฟ้า ฟิสิกส์ในภาพยนตร์วิทยาศาสตร์ ได้แก่ เทคโนโลยีนิวเคลียร์ เครื่องเร่งอนุภาคฟิสิกส์ยุคใหม่",
    courseNo: "2398131",
    credit: 3,
    genEdType: GenEdType.Sc,
  },
};

export const Other = Template.bind({});
Other.args = {
  course: {
    abbrName: "EXP ENG I",
    courseNameEn: "EXPERIENTIAL ENGLISH I",
    courseNameTh: "ภาษาอังกฤษเพื่อการเรียนรู้ในชีวิตจริง 1",
    courseDescEn:
      "Practice in the four language skills for everyday communication; comparing, analyzing, and synthesizing information from different sources; giving oral and/or written presentations.",
    courseDescTh:
      "การฝึกทักษะทางภาษาทั้ง 4 ทักษะ เพื่อการสื่อสารในชีวิตประจำวัน การเปรียบเทียบ วิเคราะห์ และสังเคราะห์ ข้อมูลจากแหล่งต่าง ๆ และการนำเสนอประเด็นสำคัญด้วยวาจา และ/หรือเป็นลายลักษณ์อักษร",
    courseNo: "5500111",
    credit: 3,
    genEdType: GenEdType.No,
  },
};

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input as Component } from "./Input";

export default {
  title: "Design System / Input",
  component: Component,
  args: {},
} satisfies ComponentMeta<typeof Component>;

export const Input: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

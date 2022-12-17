import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button as Component } from "./Button";

export default {
  title: "Design System / Button",
  component: Component,
  args: {
    size: "lg",
    variant: "solid",
    children: <>Lorem ipsum dolor sit amet.</>,
  },
} satisfies ComponentMeta<typeof Component>;

export const Button: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

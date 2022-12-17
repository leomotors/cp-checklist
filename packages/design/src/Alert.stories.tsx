import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert as Component } from "./Alert";

export default {
  title: "Design System / Alert",
  component: Component,
  args: {
    variant: "success",
    children: <>Lorem ipsum dolor sit amet.</>,
  },
} satisfies ComponentMeta<typeof Component>;

export const Alert: ComponentStory<typeof Component> = (args) => (
  <div className="w-fit">
    <Component {...args} />
  </div>
);

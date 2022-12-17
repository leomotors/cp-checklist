import type { ComponentMeta } from "@storybook/react";

import { Alert, AlertProps } from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  args: {
    variant: "warning",
    children: <>Lorem ipsum dolor sit amet.</>,
  },
} satisfies ComponentMeta<typeof Alert>;

export const Default = (args: AlertProps) => <Alert {...args} />;

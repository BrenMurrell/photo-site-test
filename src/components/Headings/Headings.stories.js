import { Headings } from ".";

export default {
  title: "Components/Headings",
  component: Headings,
  argTypes: {
    level: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    darkMode: true,
    level: "two",
    className: {},
    text: "Latest photos",
  },
};

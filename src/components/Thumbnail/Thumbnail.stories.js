import { Thumbnail } from ".";

export default {
  title: "Components/Thumbnail",
  component: Thumbnail,
  argTypes: {
    style: {
      options: ["rounded", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "rounded",
    image: "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-8@2x.png",
    className: {},
    imageClassName: {},
    img: "https://generation-sessions.s3.amazonaws.com/7b66aa6b3067829603a9329c36b0d291/img/image-2@2x.png",
  },
};

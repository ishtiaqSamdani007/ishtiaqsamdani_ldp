import Icon from "./Icon";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Icon",
  component: Icon,
};

interface Props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  margin?: string;
  onClick?: () => void;
}
const Template = (args: Props) => <Icon {...args} />;

export const UsedInApp = Template.bind({}) as Meta;
UsedInApp.args = {
  src: "https://img.icons8.com/color/48/000000/google-logo.png",
  alt: "google icon",
  width: "20px",
  height: "20px",
  margin: "0px",
  onClick: () => alert("Icon Clicked"),
};

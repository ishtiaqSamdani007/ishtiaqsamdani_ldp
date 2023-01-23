import Button from "./Button";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
};

interface Props {
  text: string;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
}
const Template = (args: Props) => <Button {...args} />;

export const UsedInApp = Template.bind({}) as Meta;
UsedInApp.args = {
  text: "Sign in",
  width: "100px",
  bgColor: "#0052FF",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "12px 16px",
  onClick: () => alert("Button Clicked"),
};
export const Primary = Template.bind({}) as Meta;
Primary.args = {
  text: "Primary",
  bgColor: "#000000",
  color: "#ffffff",
  width: "100px",
  height: "40px",
  border: "none",
  borderRadius: "5px",
  padding: "0px",
  margin: "0px",
  fontSize: "16px",
  fontWeight: "500",
  onClick: () => alert("Primary Button Clicked"),
};

export const Secondary = Template.bind({}) as Meta;
Secondary.args = {
  text: "Secondary",
  bgColor: "#ffffff",
  color: "#000000",
  width: "100px",
  height: "40px",

  border: "1px solid #000000",
  borderRadius: "5px",
  padding: "0px",
  margin: "0px",
  fontSize: "16px",
  fontWeight: "500",
  onClick: () => alert("Secondary Button Clicked"),
};

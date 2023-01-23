import { Meta } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
};

interface Props {
  text: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
}
const Template = (args: Props) => <Typography {...args} />;

export const Default = Template.bind({}) as Meta;
Default.args = {
  text: "Login to Minet",
  fontWeight: "bold",
  fontSize: "40px",
  color: "#343446",
};

export const AuthCards = Template.bind({}) as Meta;
AuthCards.args = {
  text: "google",
  fontWeight: "500",
  fontSize: "14px",
  color: "#333",
  lineHeight: "20px",
};

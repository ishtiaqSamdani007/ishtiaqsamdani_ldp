import { Meta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
};

interface Props {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  error?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  labelfontWeight?: string;
  labelfontSize?: string;
  labelLineHeight?: string;
  color?: string;
  bgColor?: string;
  required: boolean;
}
const Template = (args: Props) => <TextField {...args} />;

export const Default = Template.bind({}) as Meta;
Default.args = {
  name: "email",
  type: "email",
  placeholder: "Email",
  label: "Email",
  width: "200px",
  padding: "12px 16px",
  bgColor: "#fff",
  border: "1px solid #D0D5DD",
  margin: "0 0 16px 0",
  labelfontSize: "14px",
  labelfontWeight: "500",
  labelLineHeight: "20px",
  required: true,
};

export const Password = Template.bind({}) as Meta;
Password.args = {
  name: "password",
  type: "password",
  placeholder: "Password",
  label: "Password",
  width: "100%",
  padding: "12px 16px",
  bgColor: "#fff",
  border: "1px solid #D0D5DD",
  labelfontSize: "14px",
  labelfontWeight: "500",
  labelLineHeight: "20px",
  required: true,
};

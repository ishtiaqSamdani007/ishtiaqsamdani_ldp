import CheckBox from "./CheckBox";
import { Meta } from "@storybook/react";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
};

interface Props {
  name: string;
  label: string;
}
const Template = (args: Props) => <CheckBox {...args} />;

export const UsedInApp = Template.bind({}) as Meta;
UsedInApp.args = {
  name: "rememberMe",
  label: "Remember me",
};

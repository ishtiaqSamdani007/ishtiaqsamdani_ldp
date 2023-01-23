import { Meta } from "@storybook/react";
import StrokeLine from "./StrokeLine";

export default {
  title: "Components/StrokeLine",
  component: StrokeLine,
};

interface Props {
  text: string;
  color?: string;
}

const Template = (args: Props) => <StrokeLine {...args} />;

export const Default = Template.bind({}) as Meta;
Default.args = {
  text: "or",
  color: "#333",
};

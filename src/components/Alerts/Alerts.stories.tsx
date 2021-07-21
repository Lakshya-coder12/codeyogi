import Alerts from "./Alerts";

export default {
  title: "Alerts",
  component: Alerts,
  argTypes: {
    theme: {
      control: "select",
    },
  },
};

export const main = (args: any) => <Alerts {...args}></Alerts>;

main.args = {
  children: "Hello! there, welcome aboard",
  theme: "primary",
};

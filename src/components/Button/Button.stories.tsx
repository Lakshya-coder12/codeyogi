import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const main = (args: any) => <Button {...args}></Button>;

main.args = {
  children: "Log In",
  type: "submit",
  className: "",
  disabled: false,
  outline: false,
};

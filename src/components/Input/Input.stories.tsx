import Input from "./Input";
import { FiLock, FiAtSign, FiUser } from "react-icons/fi";

const icons = { FiLock, FiAtSign, FiUser };

export default {
  title: "Input",
  component: Input,
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
};

export const main = (args: any) => <Input {...args}></Input>;

main.args = {
  placeholder: "Username",
  touched: "false",
  error: "enter valid data",
  borderStyle: "open",
};

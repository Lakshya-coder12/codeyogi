import ProgressBar from "./ProgressBar";

export default {
  title: "Progress Bar",
  component: ProgressBar,
  argTypes: {
    theme: {
      control: "select",
    },
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
};

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
  progress: 50,
  theme: "blue",
};

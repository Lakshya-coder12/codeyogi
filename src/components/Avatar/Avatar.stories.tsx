import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const main = (args: any) => <Avatar {...args}></Avatar>;

main.args = {
  src:
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  online: true,
};

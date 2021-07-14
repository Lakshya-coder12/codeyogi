import React from "react";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  return <div className="h-screen bg-gray-400 w-80">This is sidebar.</div>;
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

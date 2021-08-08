import React from "react";
import SidebarLink from "./SidebarLink";
import { FiCpu, FiHome } from "react-icons/fi";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const svgClass = "w-5 h-5";
  return (
    <div className="pl-2.5 pt-2.5 pr-5 mt-5">
      <SidebarLink title="Dashboard" svg={<FiHome className={svgClass} />} />
      <SidebarLink title="Home" svg={<FiCpu className={svgClass} />} />
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

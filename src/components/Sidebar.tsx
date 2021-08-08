import React from "react";
import SidebarLink from "./SidebarLink";
import { FiCpu, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const svgClass = "w-5 h-5";
  return (
    <div className="pl-2.5 pt-2.5 pr-5 mt-5">
      <Link to="/dashboard">
        <SidebarLink title="Dashboard" svg={<FiHome className={svgClass} />} />
      </Link>
      <Link to="/groups">
        <SidebarLink title="Groups" svg={<FiCpu className={svgClass} />} />
      </Link>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

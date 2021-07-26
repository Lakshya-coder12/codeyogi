import React from "react";
import SidebarLink from "./SidebarLink";
import { FiCpu, FiHome } from "react-icons/fi";
import { logout } from "../api";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const svgClass = "w-5 h-5";
  return (
    <div className="fixed top-0 bottom-0 left-0 z-20 w-64 h-screen transform bg-sidebar">
      <div className="pl-2.5 pt-2.5 pr-5 mt-5">
        <SidebarLink title="Dashboard" svg={<FiHome className={svgClass} />} />
        <SidebarLink title="Home" svg={<FiCpu className={svgClass} />} />
        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="px-4 py-2 mt-4 font-semibold bg-white hover:bg-gray-300 text-13"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

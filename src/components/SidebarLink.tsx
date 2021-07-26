import React from "react";
import { FiChevronRight } from "react-icons/fi";

interface Props {
  title: string;
  svg: React.ReactElement;
}

const SidebarLink: React.FC<Props> = ({ title, svg }) => {
  return (
    <button className="flex px-3.5 py-2.75 mb-1 hover:bg-gray-300 rounded-lg items-center w-full bg-white">
      <div className="mr-3">{svg}</div>
      <div className="font-semibold text-13">{title}</div>
      <div className="flex-1">
        <FiChevronRight className="w-4 h-4 ml-auto" />
      </div>
    </button>
  );
};

SidebarLink.defaultProps = {};

export default React.memo(SidebarLink);

import React from "react";
import { FiSearch, FiMail, FiBell } from "react-icons/fi";

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 z-10 flex items-center py-1 bg-navbar h-14">
      <div className="text-sm text-white pl-7">logo</div>
      <div className="hidden ml-5 text-xl font-semibold text-white md:block">
        CODEYOGI
      </div>
      <div className="flex-1">
        <FiSearch className="w-6 h-6 ml-auto mr-2 text-white"></FiSearch>
      </div>
      <div className="flex items-center">
        <FiMail className="w-6 h-6 ml-5 text-white"></FiMail>
        <FiBell className="w-6 h-6 ml-5 text-white"></FiBell>
        <div className="ml-4 mr-5 text-white">img</div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default React.memo(Navbar);

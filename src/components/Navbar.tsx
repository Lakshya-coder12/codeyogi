import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { FiSearch, FiMail, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import Avatar from "./Avatar/Avatar";

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
        <div className="ml-4 mr-5">
          <Menu as="div" className="relative">
            <Menu.Button>
              <Avatar
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                imgSize="small"
              />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute right-0 z-20 border border-gray-400 rounded-sm top-11">
                <div className="flex flex-col space-y-2 bg-white py-2.5 px-5 ">
                  <Menu.Item>
                    <div className="flex items-center space-x-4 border-b border-gray-200 px-3.5 py-2 text-gray-700 hover:text-blue-600">
                      <FiUser className="w-4 h-4" />
                      <Link to="/profile">
                        <span className="text-sm">Profile</span>
                      </Link>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="flex items-center space-x-4 border-b border-gray-200 px-3.5 py-2 text-gray-700 hover:text-blue-600">
                      <FiLogOut className="w-4 h-4" />
                      <button
                        className="text-sm"
                        onClick={() => {
                          logout();
                          window.location.href = "/login";
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default React.memo(Navbar);

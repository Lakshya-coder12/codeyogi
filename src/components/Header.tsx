import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FiMenu, FiChevronDown, FiCpu, FiHome } from "react-icons/fi";
import { logout } from "../api";
import SidebarLink from "./SidebarLink";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);
  console.log("isMenuOpen is ", isMenuOpen);
  const svgClass = "w-5 h-5 text-gray-600";
  return (
    <>
      <div className="sticky z-10 flex items-center py-2 top-14 bg-header">
        <div className="pl-4 pr-6">
          <FiMenu
            className="w-5 h-5"
            onClick={isMenuFullyOpen ? undefined : () => setIsMenuOpen(true)}
          />
        </div>
        <span className="text-sm font-semibold">Title</span>
        <div className="flex-1">
          <button className="pt-2 pl-4 pb-2.5 pr-4 bg-white ml-auto block mr-5 rounded-lg border border-gray-300">
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 text-13">Settings</span>
              <FiChevronDown className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
      <Transition.Root
        show={isMenuOpen}
        as={Fragment}
        beforeLeave={() => setIsMenuFullyOpen(true)}
        afterLeave={() => setIsMenuFullyOpen(false)}
      >
        <Dialog open={isMenuOpen} onClose={setIsMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed top-0 bottom-0 left-0 z-20 w-64 h-screen transform bg-sidebar">
              <div className="pl-2.5 pt-2.5 pr-5 mt-5">
                <SidebarLink
                  title="Dashboard"
                  svg={<FiHome className={svgClass} />}
                />
                <SidebarLink
                  title="Home"
                  svg={<FiCpu className={svgClass} />}
                />
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
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 bg-black"></Dialog.Overlay>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

Header.defaultProps = {};

export default React.memo(Header);

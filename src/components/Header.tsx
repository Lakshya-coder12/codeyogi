import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import Sidebar from "./Sidebar";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);
  console.log("isMenuOpen is ", isMenuOpen);
  return (
    <>
      <div className="flex items-center py-2 bg-header">
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
              <Sidebar />
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

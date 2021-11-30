import React from "react";
// import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  SearchIcon,
  GlobeIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5
    shadow-md"
    >
      <h1>pyNotes</h1>
      {/* Left */}
      <div className="flex items-center">
        {/* <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          width={70}
          height={40}
          layout="fixed"
        /> */}
        <GlobeIcon className="h-6 " />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none 
          placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search pyNotes"
          />
        </div>
      </div>
      {/* Center */}
      <div className=" flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <p className="whitespace-nowrap font-semibold pr-3">User Name</p>
      </div>
    </div>
  );
}

export default Header;

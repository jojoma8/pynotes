import React from "react";
// import Image from "next/image";
import { BellIcon, ChatIcon } from "@heroicons/react/solid";
import { FlagIcon, SearchIcon, GlobeIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      {/* Left */}
      <div className="flex items-center">
        {/* <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          width={70}
          height={40}
          layout="fixed"
        /> */}
        <GlobeIcon className="h-6" />
        <div className="flex">
          <SearchIcon className="h-6" />
          <input type="text" placeholder="Search pyNotes" />
        </div>
      </div>
      {/* Center */}
      {/* Right */}
    </div>
  );
}

export default Header;

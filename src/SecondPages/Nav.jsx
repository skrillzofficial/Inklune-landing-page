import React from "react";
import logo from "../assets/Inklune.png";
import { Search } from "lucide-react";
import write from "../assets/write.png";
import bell from "../assets/bell.png";
import profile from "../assets/profile id.jpg";

const Nav = () => {
  return (
    <div className="w-full">
      <div
        id="nav"
        className="w-full fixed border border-t-0 border-l-0 border-r-0 border-gray-300 py-3 md:py-4"
      >
        <div className="w-[95%] md:w-11/12 container mx-auto flex justify-between my-auto">
          <div className="flex lg:w-[30%] md:w-[50%] gap-3">
            <span>
              <img
                className="w-[50%] md:w-[100%] lg:w-[90%] md:pt-2"
                src={logo}
                alt=""
              />
            </span>
            <div className="relative hidden md:block md:pt-2 lg:pt-3">
              <Search
                size={15}
                className="lg:size-5 absolute lg:left-2 md:left-5 md:top-3 lg:top-4 text-gray-400"
              />
              <input
                className="bg-gray-200 rounded-2xl pl-8 outline-none lg:py-[2px]"
                type="text"
                placeholder="search stories"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 md:gap-6 w-full md:w-[30%] lg:w-[20%]">
            {/* Write icon with text (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors cursor-pointer">
              <img
                className="w-6 h-6 object-contain"
                src={write}
                alt="Write icon"
              />
              <p className="text-sm font-medium">Write</p>
            </div>

            {/* Notification bell */}
            <div className="relative hover:bg-gray-100 p-2 rounded-full transition-colors cursor-pointer">
              <img
                className="w-6 h-6 object-contain"
                src={bell}
                alt="Notifications"
              />
              {/* Optional notification badge */}
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            {/* Profile picture */}
            <div className="hover:bg-gray-100 p-1 rounded-full transition-colors cursor-pointer">
              <img
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
                src={profile}
                alt="User profile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-11/12 container mx-auto flex gap-2 md:gap-4 lg:gap-6 my-auto pt-20 md:pt-25 lg:pt-30 text-sm md:text-md lg:text-[15px]">
        <button className="text-white rounded bg-purple-500 px-2 py-1">
          Home
        </button>
        <button>Following</button>
        <button>Popular</button>
        <button>Recommended</button>
      </div>
    </div>
  );
};

export default Nav;

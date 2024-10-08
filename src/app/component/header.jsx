import { Input } from "../../components/ui/input";
import React from "react";
import { GoBell } from "react-icons/go";
import { AvatarDemo } from "./avatar";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

function Header() {
  return (
    <div className="bg-slate-200 absolute px-1 w-full flex gap-10 justify-end h-[60px] ">
      <div className="relative top-2 flex gap-[10px] mr-[90px]">
        <div className="">
          <Input
            type="text"
            placeholder= "       Search here..."
            className="border-zinc-700 h-10 !w-[300px]  text-black placeholder:text-black border-none bg-white rounded-3xl"
          />
        </div>
        <div className="absolute top-[10px] flex justify-center ml-[260px]">
          <IoMdMic />
        </div>
        <div className="absolute top-[10px] flex justify-center ml-[10px]">
          <CiSearch className="h-5 w-5 mr-96" />
        </div>

        <div className="relative top-3 flex justify-center">
          <GoBell className="w-10 h-5" />
        </div>
        <AvatarDemo />
      </div>
      <div className="absolute group top-2 mr-[40px]">
        <MdArrowDropDown className="h-10 w-10 hover:rotate-180 cursor-pointer" />
        <div className="absolute right-[2px] hidden group-hover:block bg-slate-400 text-white mt-2 rounded shadow-lg ">
          <ul className="py-2 w-[120px]">
            <li className="flex items-center px-4 py-2 hover:bg-pink-500 hover:text-black">
              <FaRegUser className="mr-2" />
              Sign in
            </li>
            <li className=" flex items-center px-4 py-2 hover:bg-pink-500 hover:text-black">
              <IoSettings className="mr-2" />
              Setting
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-pink-500 hover:text-black">
              <LuLogOut className="mr-2" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

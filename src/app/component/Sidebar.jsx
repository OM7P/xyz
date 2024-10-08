"use client";

import React, { useEffect, useState } from "react";
import { HiMiniCube } from "react-icons/hi2";
import { LuUserPlus, LuAlarmClock } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { Button } from "../../components/ui/button";
import { LuLogOut } from "react-icons/lu";
import LogoColor from "./logoColor";
import { useRouter } from "next/navigation";
// import SiteLoading from "./loader";

function Sidebar() {
  const router = useRouter()
  // const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   // Simulate a data fetch
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 seconds delay
  // }, []);

  // if (loading) {
  //   return <SiteLoading />;
  // } else {
    return (

    <div className="absolute bg-black text-gray-300 w-[290px] h-[130dvh] flex flex-col justify-between">
      {/* Top Section - Logo */}
      <div>
        <div className="p-6">
          <LogoColor/>
        </div>

        {/* Menu Items */}
        <div className="mt-10">
          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px]  text-white rounded-lg mb-2 hover:bg-pink-500">
            <HiMiniCube className="mr-3" />
            Overview
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <LuUserPlus className="mr-3" />
            Employee Management
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <LuAlarmClock className="mr-3" />
            Attendance
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <GiThreeLeaves className="mr-3" />
            Leave
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <FaWallet className="mr-3" />
            Payroll
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <IoSettings className="mr-3" />
            Settings
          </Button>

          <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] hover:bg-pink-500 rounded-lg mb-2">
            <TbReportSearch className="mr-3" />
            Report
          </Button>
        </div>
      </div>

      {/* Bottom Section - Logout */}
      <div className="p-6">
        <Button className="flex items-center justify-start w-[240px] h-12 text-[16px] bg-pink-500 text-white rounded-lg hover:bg-pink-700" onClick={()=>{router.push('/signin')}}>
      <LuLogOut className="m-3" />          Logout
        </Button>
      </div>
    </div>
  );
}


export default Sidebar;

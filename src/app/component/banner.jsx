// components/Banner.js
import { WiDayCloudyGusts } from "react-icons/wi";
import Clock from "./digitalclock";

export default function  Banner() {
    return (
      <div className="absolute left-[300px] top-[70px] bg-gradient-to-r w-[800px] from-yellow-400 via-pink-500 to-red-500 rounded-lg p-4 flex items-center justify-between text-white">
        {/* Left Section: Weather and Date */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <WiDayCloudyGusts className="w-12 h-12" />

            <span className="ml-2 text-lg">Partly Cloudy</span>
          </div>
          <div className="border-l-2 border-white h-8 mx-4"></div>
          <div>
            <p className="text-sm">21 September 2024</p>
            <h1 className="text-2xl font-semibold">Today</h1>
          </div>
        </div>
  
        {/* Middle Section: Status */}
        <div className="flex items-center space-x-2 ">
          <span className="bg-green-500 px-3 py-1  rounded-md text-sm">Present - on time</span>
          <img
            src={"images/icons8-running-48.png"} // Placeholder for the running person icon
            alt="Running Icon"
            className="w-20 h-20 left-[480px] absolute bottom-[2px]"
          />
        </div>
  
        {/* Right Section: Entry Time */}
        <div className="text-right">
          <p className="text-sm relative bottom-[15px] text-[25px]">Entry Time</p>
          <h2 className="text-4xl font-bold relative bottom-[5px] h-[10px] text-[100px]"><Clock/></h2>
        </div>
      </div>
    );
  }
  
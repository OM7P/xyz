"use client";

import * as React from "react";
import { Calendar } from "../../components/ui/calendar"; // Adjust path based on your project

export function CalendarDemo() {
  const [date, setDate] = React.useState(new Date()); // No type annotations in JSX

  return (
    <div className="p-4 ml-[80%]  relative top-[100px] text-black ">
      <h2 className="text-lg font-semibold mb-2">Personal Calendar</h2>     
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow w-[270px]  bg-slate-100"
      />
    </div>
  );
}

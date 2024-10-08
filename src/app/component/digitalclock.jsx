'use client'

import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    // Add leading zeros if needed
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="flex items-center justify-center w-[300px] ">
      <h1 className="text-6xl font-mono text-white w-[580px] h-[100px] relative left-2 !text-[38px]">
        {formatTime(time)}
      </h1>
    </div>
  );
};

export default Clock;

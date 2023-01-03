import React, { useState } from "react";
import "./LimitedTime.css";

const LimitedTime = ({ endDay}) => {
  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const date = new Date();

  // 10 day 00:00:00
  setTimeout(() => {
    if (
      endDay - date.getDay() === 0 &&
      24 - date.getHours() === 0 &&
      60 - date.getMinutes() === 0 &&
      60 - date.getSeconds() === 0
    ) {
      setDay(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDay(endDay - date.getDate());
      setHours(23 - date.getHours());
      setMinutes(59 - date.getMinutes());
      setSeconds(59 - date.getSeconds());
    }
  }, 1000);

  return (
    <div className="flex flex-row justify-center space-x-2 md:space-x-5 mt-5">
      <div className="time-card flex flex-col justify-center items-center border border-slate-300 shadow w-20 h-20 md:w-28 md:h-24 rounded-lg">
        <span className="text-cyan-400 text-2xl md:text-4xl font-bold">
          {day}
        </span>
        <span className="text-slate-400 uppercase text-sm">Days</span>
      </div>
      <div className="time-card flex flex-col justify-center items-center border border-slate-300 shadow w-20 h-20 md:w-28 md:h-24 rounded-lg">
        <span className="text-cyan-400 text-2xl md:text-4xl font-bold">
          {hours}
        </span>
        <span className="text-slate-400 uppercase text-sm">Hours</span>
      </div>
      <div className="time-card flex flex-col justify-center items-center border border-slate-300 shadow w-20 h-20 md:w-28 md:h-24 rounded-lg">
        <span className="text-cyan-400 text-2xl md:text-4xl font-bold">
          {minutes}
        </span>
        <span className="text-slate-400 uppercase text-sm">minutes</span>
      </div>
      <div className="time-card flex flex-col justify-center items-center border border-slate-300 shadow w-20 h-20 md:w-28 md:h-24 rounded-lg">
        <span className="text-cyan-400 text-2xl md:text-4xl font-bold">
          {seconds}
        </span>
        <span className="text-slate-400 uppercase text-sm">seconds</span>
      </div>
    </div>
  );
};

export default LimitedTime;

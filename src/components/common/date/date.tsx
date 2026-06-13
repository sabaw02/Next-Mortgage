"use client";

import { useState, useEffect } from "react";
import moment from "moment-jalaali";
import { CiCalendar } from "react-icons/ci";
import { PiClockCountdownLight } from "react-icons/pi";

if (typeof window !== "undefined") {
  moment.loadPersian();
}

export default function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState<moment.Moment | null>(
    null,
  );

  useEffect(() => {
    setCurrentDateTime(moment());
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!currentDateTime) {
    return <div className="h-14"></div>;
  }

  const day = currentDateTime.format("jD");
  const month = currentDateTime.format("jMMMM");
  const year = currentDateTime.format("jYYYY");
  const persianDate = `${day} ${month} ${year}`;

  const time = currentDateTime.format("HH:mm");

  return (
    <div className="flex justify-between w-83.5 h-4 " dir="rtl">
      <div className="flex items-center justify-center space-x-2">
        <CiCalendar className="w-4 h-4 text-neutral-700" />
        <div className="font-light text-xs text-neutral-700">{persianDate}</div>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <PiClockCountdownLight className="w-4 h-4 text-neutral-700" />
        <div className="font-light text-xs text-neutral-700">{time}</div>
      </div>
    </div>
  );
}

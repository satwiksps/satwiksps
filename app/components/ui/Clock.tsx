"use client";
import { useEffect, useState } from "react";

export default function TimeClock() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>{time} IST</span>;
}

import React from "react";
import { useTime } from "react-timer-hook";

const Time = () => {
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Time Now</h1>
      <div style={{ fontSize: "70px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <span>{ampm}</span>
      </div>
    </div>
  );
};

export default Time;

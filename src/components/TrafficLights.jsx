import React, { useEffect, useState } from "react";

const TrafficLights = () => {
  const [activeLight, setActiveLight] = useState("green");
  const nextLight = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };
  const durations = {
    green: 3000,
    yellow: 500,
    red: 4000,
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveLight(nextLight[activeLight]);
    }, durations[activeLight]);
    return () => clearTimeout(timer);
  }, [activeLight]);
  return (
    <div className="traffic-signal">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLights;

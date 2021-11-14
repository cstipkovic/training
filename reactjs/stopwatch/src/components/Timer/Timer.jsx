import React, { useState, useEffect } from "react";

import "./Timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log(timer);
    // let st = setInterval(() => {
    //   setTimer(timer + 1);
    // }, 1000);
  }, [timer]);

  return (
    <div className="clock-holder">
      <span>{timer}</span>
    </div>
  );
};

export default Timer;

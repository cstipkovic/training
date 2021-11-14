import React from "react";

import Timer from "../../components/Timer/Timer";
import StartButton from "../../components/Button/Start/Start";
import StopButton from "../../components/Button/Stop/Stop";

import "./Stopwatch.css";

const Stopwatch = () => {
  return (
    <div className="training-stopwatch">
      <Timer />
      <div className="button-holder">
        <StartButton />
        <StopButton />
      </div>
    </div>
  );
};

export default Stopwatch;

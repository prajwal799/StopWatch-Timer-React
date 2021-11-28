import React, { useEffect, useState, useRef } from "react";
import "./Time.css";
const StopWatch = () => {
  const [second, setSecond] = useState();
  const [mileSecond, setMileSecond] = useState(0);
  const refTimer = useRef(null);

  const StartTime = () => {
    if (!refTimer.current) {
      refTimer.current = setInterval(() => {
        setMileSecond((prev) => {
          return prev + 10;
        });
      }, 10);
    }
  };

  const handleReset = () => {
    handlePause();
    setMileSecond(0);
  };

  const handlePause = () => {
    clearInterval(refTimer.current);
    refTimer.current = null;
  };
  return (
    <div>
      <h1>Stop Watch</h1>
      <div>
        <h1>
          {Math.floor(mileSecond / 360000) % 6} h :
          {Math.floor(mileSecond / 60000) % 60} m :
          {Math.floor(mileSecond / 1000) % 60} s :
          {Math.floor(mileSecond / 10) % 100}
        </h1>
      </div>
      <button onClick={StartTime}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;

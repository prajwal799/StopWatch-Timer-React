import React, { useRef, useState } from "react";
import "./Time.css"
const Timer = () => {
  const [time, setTime] = useState(0);
  const [minute , setMinute] = useState(0);
  const [hour , setHour] = useState(0);
  const refTime = useRef(null);

  const handleChangeHour = (e) => {
    setHour(e.target.value);
  }
  const handleChangeMinute = (e) => {
    setMinute(e.target.value);
  }
  const handleChange = (e) => {
    setTime(e.target.value);
  };
  const handleTime = () => {
    
    if (!refTime.current) {
      refTime.current = setInterval(() => {
        setTime((prev) => {
          if (prev - 1 == 0 || prev == 0) {
            if(minute == 0 && hour >= 1){
              if(prev == 0){
                setMinute(minute+59);
                setHour(hour-1);
                return prev+59;
              }
              setMinute(minute+60);
              return prev;
            }
              if(minute >= 1){
                setMinute(minute-1);
                return prev+59;
              }
            clearInterval(refTime.current);
          }
          return prev - 1;
        });
      }, 1000);
    }
  };
  const handlePause = () => {
    clearInterval(refTime.current);
    refTime.current = null;
  };
  const handleReset = () => {
    handlePause();
    setTime(0);
    setMinute(0);
    setHour(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <input
        placeholder="Hour"
        type="number"
        onChange={handleChangeHour}
        value={hour}
        className="input_Second"
      />h
      <input
        placeholder="Minute"
        type="number"
        onChange={handleChangeMinute}
        value={minute}
        className="input_Second"
      />M
      <input
        placeholder="Second"
        type="number"
        onChange={handleChange}
        value={time}
        className="input_Second"
      />S
      <br />
      <br /> <button onClick={handleTime}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;

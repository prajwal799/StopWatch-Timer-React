import "./styles.css";
import StopWatch from "./Components/StopTimer";
import Timer from "./Components/Timer.jsx";
import { useState } from "react";

export default function App() {
  const [stop , setStop] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setStop(true)}>Stop</button>
      <button onClick={() => setStop(false)} >Timer</button>
      {stop ? <StopWatch /> : <Timer />}
   
    </div>
  );
}

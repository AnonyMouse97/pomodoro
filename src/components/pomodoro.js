import React, { useState, useCallback } from "react";
import { SESSION_DURATION } from "../core/constants";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
  const [seconds, setSeconds] = useState(SESSION_DURATION);
  const [running] = useState(false);

  const handleMinus = useCallback(() => setSeconds(Math.max(seconds - 60, 60)), [seconds, setSeconds]);
  const handlePlus = useCallback(() => setSeconds(seconds + 60), [seconds, setSeconds]);
  const handleStartPause = () => console.warn("handleReset");
  const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [setSeconds]);

  return (
    <div>
      <Display seconds={seconds} running={running} />
      <Tools
        running={running}
        onMinus={handleMinus}
        onPlus={handlePlus}
        onStartPause={handleStartPause}
        onReset={handleReset}
      />
    </div>
  );
};

export default Pomodoro;

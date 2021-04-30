import React, { useState, useCallback } from "react";
import { SESSION_DURATION } from "../core/constants";

import useTimer from "../core/hooks/timer"

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
  const [{ seconds, running }, { setSeconds, setRunning }] = useTimer(SESSION_DURATION);

  const handleMinus = useCallback(
    () => setSeconds(Math.max(seconds - 60, 60)),
    [seconds, setSeconds]);
  const handlePlus = useCallback(
    () => setSeconds(seconds + 60),
    [seconds, setSeconds]);
  const handleStartPause = useCallback(
    () => setRunning(!running),
    [running, setRunning])
  const handleReset = useCallback(() => setSeconds(SESSION_DURATION),
    [setSeconds]);

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

import { useState, useEffect } from "react";

export default (initialSeconds, initialRunning = false) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initialRunning);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(
    () => {
      if (running) {
        setIntervalId(setInterval(
          () => setSeconds(Math.max(0, seconds - 1)),
          1000,
        ));

        if (seconds === 0) {
          setRunning(false);
          // warn parent !
        }
      } else if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId)
        }
      }
    },
    [running, seconds]
  )
  return [
    { seconds, running },
    { setSeconds, setRunning },
  ];
}
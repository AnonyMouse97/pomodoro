import React, { useState } from "react";
import { SESSION_DURATION } from "../core/constants";

import Display from "./display/display";

const Pomodoro = () => {
  const [timer] = useState(SESSION_DURATION);
  const [running] = useState(false);

  return (
    <div>
      <Display
        seconds={timer}
        running={running}
      />
    </div>
  )
};

export default Pomodoro;

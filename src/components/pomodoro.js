import React, {useState} from "react";
import {SESSION_DURATION} from "../core/constants";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(SESSION_DURATION);
    const [running] = useState(false);

    const handleMinus = () => setSeconds(Math.max(seconds - 60, 60));
    const handlePlus = () => setSeconds(seconds + 60);
    const handleStartPause = () => console.warn("handleReset");
    const handleReset = () => setSeconds(SESSION_DURATION);

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

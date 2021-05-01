import React, {useState, useCallback} from "react";

import {SESSION_DURATION} from "../core/constants";

import useTimer from "../core/hooks/timer";

import Display from "./display/display";
import Tools from "./tools/tools";
import Modal from "./modal/modal";

const Pomodoro = () => {
    const [showModal, setShowModal] = useState(false);
    const [
        {seconds, running},
        {setSeconds, setRunning},
    ] = useTimer(SESSION_DURATION, false, () => setShowModal(true));

    const handleMinus = useCallback(
        () => setSeconds(Math.max(seconds - 60, 60)),
        [seconds, setSeconds],
    );
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [
        seconds,
        setSeconds,
    ]);
    const handleStartPause = useCallback(() => setRunning(!running), [
        running,
        setRunning,
    ]);
    const handleReset = useCallback(() => setSeconds(SESSION_DURATION), [
        setSeconds,
    ]);

    const handleModalClose = useCallback(() => {
        setShowModal(false);
        handleReset();
    }, [setShowModal, handleReset]);

    const handleModalRestart = useCallback(() => {
        handleModalClose();
        handleStartPause();
    }, [setShowModal, handleStartPause]);

    return (
        <div>
            <Display seconds={seconds} />
            <Tools
                running={running}
                onMinus={handleMinus}
                onPlus={handlePlus}
                onStartPause={handleStartPause}
                onReset={handleReset}
            />
            <Modal
                show={showModal}
                onClose={handleModalClose}
                onRestart={handleModalRestart}
            />
        </div>
    );
};

export default Pomodoro;

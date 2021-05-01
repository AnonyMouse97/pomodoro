import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import useTimer from "../..//core/hooks/timer";

import Button from "../tools/button";
import Display from "../display/display";

import {NBSP, PAUSE_DURATION} from "../../core/constants";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }
    const [{running, seconds}, {setRunning}] = useTimer(
        PAUSE_DURATION,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return ReactDOM.createPortal(
        <div style={containerStyles}>
            <div>
                <h4>{"timer is over !"}</h4>
                <p>{"take a break"}</p>
                <p>{"WHen the pause is over the break will restart"}</p>
                <Display seconds={seconds} running={running} />
                <div>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;

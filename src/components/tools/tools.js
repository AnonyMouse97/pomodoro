import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
import {NBSP} from "../../core/constants";

const Tools = ({running, onStartPause, onReset, onPlus, onMinus}) => (
    <div className={""}>
        <Button
            label={"-"}
            title={"Remove one minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button
label={"Reset"} disabled={running} onClick={onReset} />
        {NBSP}
        <Button
            label={running ? "pause" : "start"}
            title={`${running ? "pause" : "start"} the timer`}
            onClick={onStartPause}
        />
        {NBSP}
        <Button
            label={"+"}
            title={"Add one minute"}
            disabled={running}
            onClick={onPlus}
        />
    </div>
);

Tools.propTypes = {
    running: PropTypes.bool,
    onStartPause: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
};

export default Tools;

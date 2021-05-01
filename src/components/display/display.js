import React from "react";
import PropTypes from "prop-types";

import Cyphers from "./cyphers";

const styles = {
    fontSize: "10rem",
    textAlign: "center",
};
const Display = ({seconds}) => (
    <div style={styles}>
        <Cyphers value={Math.floor(seconds / 60)} />
        <span
            style={{
                opacity: seconds % 2 ? 0 : 1,
            }}>
            {":"}
        </span>
        <Cyphers value={seconds % 60} />
    </div>
);

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default Display;

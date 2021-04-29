import React from "react";

import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={""}
        type={"button"}
        title={title || label}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};
export default Button;

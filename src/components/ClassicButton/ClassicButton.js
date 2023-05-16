import React from "react";
import PropTypes from "prop-types";

export const ClassicButton = ({ children, style, type, onClick, disabled }) => {
  return (
    <button className={`button ${disabled && 'button_type_disabled'}`}style={style} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

ClassicButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

ClassicButton.defaultProps = {
  style: {},
  type: "button",
  onClick: () => {},
  disabled: false
};

export default ClassicButton;

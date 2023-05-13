import React from "react";
import PropTypes from "prop-types";

export const ClassicButton = ({ children, style }) => {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};

// button_type_disabled
// button_size_s
// button_size_m
ClassicButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.object,
};

ClassicButton.defaultProps = {
  style: {},
};

export default ClassicButton;

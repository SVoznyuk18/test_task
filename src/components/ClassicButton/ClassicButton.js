import React from "react";
import PropTypes from "prop-types";

export const ClassicButton = ({ children, style, type }) => {
  return (
    <button className="button" style={style} type={type}>
      {children}
    </button>
  );
};

ClassicButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
};

ClassicButton.defaultProps = {
  style: {},
  type: "button",
};

export default ClassicButton;

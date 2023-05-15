import React from "react";
import PropTypes from "prop-types";

const HelperMessage = ({ helperText, error }) => {
  return (
    <div className="helper">
      <p className={`helper__label ${error && "helper__label_error"}`}>
        {error || helperText || null}
      </p>
    </div>
  );
};

HelperMessage.propTypes = {
  style: PropTypes.object,
  helperText: PropTypes.string,
  error: PropTypes.string,
};

HelperMessage.defaultProps = {
  style: {},
  helperText: "",
  error: "",
};

export default HelperMessage;

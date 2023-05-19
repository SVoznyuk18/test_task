import React, {memo} from "react";
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
  helperText: PropTypes.string,
  error: PropTypes.string,
};

HelperMessage.defaultProps = {
  helperText: "",
  error: "",
};

export default memo(HelperMessage);

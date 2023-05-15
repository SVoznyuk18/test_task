import React from "react";
import PropTypes from "prop-types";

import { HelperMessage } from "ComponentsRoot";

const ClassicInput = ({
  label,
  htmlFor,
  id,
  name,
  register,
  validation,
  helperText,
  errorMessage,
}) => {
  return (
    <div className="input_wrapper">
      <input
        className="input input_error"
        type="text"
        id={id}
        name={name}
        {...register(name, validation)}
      />
      <label htmlFor={htmlFor} className="label label_error">
        {label}
      </label>
      <HelperMessage helperText={helperText} error={errorMessage} />
    </div>
  );
};

ClassicInput.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
};

ClassicInput.defaultProps = {
  label: "",
  htmlFor: "",
  id: "",
  register: () => {},
  validation: {},
  helperText: "",
  errorMessage: "",
};

export default ClassicInput;

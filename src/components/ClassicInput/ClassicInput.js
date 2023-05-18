import React from "react";
import PropTypes from "prop-types";

import { HelperMessage } from "ComponentsRoot";

const ClassicInput = ({
  label,
  htmlFor,
  id,
  name,
  type,
  register,
  validation,
  helperText,
  errorMessage,
}) => {
  return (
    <div className="input_wrapper">
      <input
        className="input input_error"
        type={type}
        id={id}
        name={name}
        {...register(name)}
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
  name: PropTypes.string,
  typr: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
};

ClassicInput.defaultProps = {
  label: "",
  htmlFor: "",
  id: "",
  name: '',
  type: 'text',
  register: () => {},
  validation: {},
  helperText: "",
  errorMessage: "",
};

export default ClassicInput;

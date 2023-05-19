import React, {memo} from "react";
import PropTypes from "prop-types";

import { HelperMessage } from "ComponentsRoot";

const ClassicInput = ({
  label,
  htmlFor,
  id,
  name,
  type,
  register,
  helperText,
  errorMessage,
  getValues,
  style
}) => {

  const value = getValues(name);
  
  return (
    <div className="input_wrapper" style={style}>
      <input
        className={`input ${errorMessage && 'input_error'}`}
        type={type}
        id={id}
        name={name}
        {...register(name)}
      />
      <label htmlFor={htmlFor} className={`label ${errorMessage && 'label_error'} ${value && 'label_dirtyField'}`}>
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
  type: PropTypes.string,
  register: PropTypes.func,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  getValues: PropTypes.func,
  style: PropTypes.object,
};

ClassicInput.defaultProps = {
  label: "",
  htmlFor: "",
  id: "",
  name: '',
  type: 'text',
  register: () => {},
  helperText: "",
  errorMessage: "",
  getValues: () => {},
  style: {}
};

export default memo(ClassicInput);

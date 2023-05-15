import React from "react";

const ClassicInput = ({
  label,
  htmlFor,
  id,
  name,
  register,
  validation,
  errorMessage,
}) => {
  return (
    <div className="input_wrapper">
      <input type="text" id="email" className="input input_error" />
      <label htmlFor="email" className="label label_error">
        email
      </label>
    </div>
  );
};

export default ClassicInput;

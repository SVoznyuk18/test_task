import React, { useState } from "react";
import PropTypes from "prop-types";

import { HelperMessage } from "ComponentsRoot";

const FileUploader = ({
  htmlFor,
  accept,
  size,
  id,
  name,
  register,
  placeholder,
  errorMessage,
}) => {
  const [choseFile, setChoseFile] = useState("");

  const handleChangeFileName = (e) => {
    setChoseFile(e.target.files[0].name);
  };

  return (
    <div className="fileUploader">
      <div className="container">
        <input
          className="fileUploader__input"
          type="file"
          accept={accept}
          id={id}
          name={name}
          size={size}
          onChange={handleChangeFileName}
        />
        <label
          htmlFor={htmlFor}
          className={`
              fileUploader__label 
              ${true && "fileUploader__label_error"}
            `}
        >
          Upload
        </label>
        <span
          className={`
            fileUploader__file-chosen 
            ${choseFile && "fileUploader__file-chosen_chosen"} 
            ${true && "fileUploader__file-chosen_error"}
        `}
        >
          {choseFile || placeholder}
        </span>
      </div>
      <HelperMessage error={errorMessage} />
    </div>
  );
};

FileUploader.propTypes = {
  photo: PropTypes.string,
  accept: PropTypes.string,
  size: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
};

FileUploader.defaultProps = {
  htmlFor: "",
  accept: "image/*, .jpeg, .jpg",
  size: 0,
  id: "",
  name: "",
  register: () => {},
  placeholder: "",
  errorMessage: "error",
};

export default FileUploader;

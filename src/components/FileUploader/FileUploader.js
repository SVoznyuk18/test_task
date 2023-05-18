import React from "react";
import PropTypes from "prop-types";

import { HelperMessage } from "ComponentsRoot";

const FileUploader = ({
  htmlFor,
  accept,
  defaultImgSize,
  id,
  name,
  register,
  placeholder,
  errorMessage,
  setValue,
  clearErrors,
  cbWidth,
  cbHeight,
  cbChoseFile,
  choseFile
}) => {
  
  const handleChangeFileName = (e) => {
    cbChoseFile(e.target.files[0]);
    getImgResolution(e, cbWidth, cbHeight);
    setValue(name, e.target.files[0]);
    clearErrors(name);
  };

  const getImgResolution = (file, cbWidth, cbHeight) => {
    let reader = new FileReader();

    reader.onload = function(event) {
      let img = new Image();

      img.onload = function() {
        cbWidth(this.width);
        cbHeight(this.height)
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file.target.files[0]);
  }

  return (
    <div className="fileUploader">
      <div className="container">
        <input
          className="fileUploader__input"
          type="file"
          accept={accept}
          id={id}
          name={name}
          size={defaultImgSize}
          {...register(name)}
          onChange={handleChangeFileName}
        />
        <label
          htmlFor={htmlFor}
          className={`
              fileUploader__label 
              ${errorMessage && "fileUploader__label_error"}
            `}
        >
          Upload
        </label>
        <span
          className={`
            fileUploader__file-chosen 
            ${choseFile?.name && "fileUploader__file-chosen_chosen"} 
            ${errorMessage && "fileUploader__file-chosen_error"}
        `}
        >
          {choseFile?.name || placeholder}
        </span>
      </div>
      <HelperMessage error={errorMessage} />
    </div>
  );
};

FileUploader.propTypes = {
  photo: PropTypes.string,
  accept: PropTypes.string,
  defaultImgSize: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  setValue: PropTypes.func,
  clearErrors: PropTypes.func,
  cbWidth: PropTypes.func,
  cbHeight: PropTypes.func,
  cbChoseFile: PropTypes.func
};

FileUploader.defaultProps = {
  htmlFor: "",
  accept: "image/*, .jpeg, .jpg",
  defaultImgSize: 0,
  id: "",
  name: "",
  register: () => {},
  placeholder: "",
  errorMessage: "",
  setValue: () => {},
  clearErrors: () => {},
  cbWidth: () => {},
  cbHeight: () => {},
  cbChoseFile: () => {},
};

export default FileUploader;

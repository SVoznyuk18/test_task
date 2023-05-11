import React, { useState } from "react";

const FileUploader = () => {

    const [choseFile, setChoseFile] = useState('');

    const handleChangeFileName = (e) => {
        setChoseFile(e.target.files[0].name);
    }

    return (
        <div className="fileUploader">
            <input
                className="fileUploader__input"
                type='file'
                accept='image/*, .png, .jpg, .gif, .web'
                id='avatar'
                name='avatar'
                onChange={handleChangeFileName}
            />
            <label
                htmlFor="avatar"
                className={`
                    fileUploader__label 
                    ${true && 'fileUploader__label_error'}
                `}
            >
                Upload
            </label>
            <span
                className={`
                    fileUploader__file-chosen 
                    ${choseFile && 'fileUploader__file-chosen_chosen'} 
                    ${true && 'fileUploader__file-chosen_error'}
                `}
            >
                {choseFile || 'Upload your photo'}
            </span>
        </div>
    )
}

export default FileUploader;
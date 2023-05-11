import React from "react";
import PropTypes from 'prop-types';

export const ClassicButton = ({ children }) => {
    return (
        <button className='button'>
            {children}

        </button>
    )
}

// button_type_disabled
// button_size_s
// button_size_m
ClassicButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired
}

ClassicButton.defaultProps = {
    

}

export default ClassicButton;
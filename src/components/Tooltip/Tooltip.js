import React, {memo} from "react";
import PropTypes from "prop-types";

const Tooltip = ({children, text, style}) => {
    return (
        <div className="tooltip" style={style}>
            <div className="tooltip__target" >{children}</div>
            <div className="tooltip__text">{text}</div>
        </div>
    )
}

Tooltip.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    style: PropTypes.object
};
Tooltip.defaultProps = {
    style: {}
}
  
export default memo(Tooltip);
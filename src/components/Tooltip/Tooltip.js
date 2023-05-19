import React, {memo} from "react";
import PropTypes from "prop-types";

const Tooltip = ({children, text}) => {
    return (
        <div className="tooltip">
            <div className="tooltip__target">{children}</div>
            <div className="tooltip__text">{text}</div>
        </div>
    )
}

Tooltip.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  };
  
export default memo(Tooltip);
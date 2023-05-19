import React from "react";

const Tooltip = ({children, text}) => {
    return (
        <div className="tooltip">
            <div className="tooltip__target">{children}</div>
            <div className="tooltip__text">{text}</div>
        </div>
    )
}

export default Tooltip;
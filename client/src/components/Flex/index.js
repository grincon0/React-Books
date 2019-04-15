import React from "react";
import "./style.css";

const Flex = (props) => {
    return (
        <div className={`flex ${props.classes}`}>
            {props.children}
        </div>
    )

}

export default Flex;
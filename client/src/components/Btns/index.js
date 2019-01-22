import React from "react";
import "./style.css";

function Btns(props) {
    return (
        <button
        style={{ float: "right", marginBottom: 10 }} 
        className="btn" 
        onClick={props.onClickHandle}
        {...props} 
        >
        {props.children}
        </button>
    );

}

export default Btns;
import React from "react";
import "./styles/Button.css";

export const Button = (props) => {
    return(
        <button id={props.id} onClick={props.onClick} className={`landing-button`}>
            Try it now
        </button>
    );
}


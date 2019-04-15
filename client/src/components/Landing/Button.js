import React from "react";
import "./styles/Button.css";

export const Button = (props) => {
    return(
        <button onClick={props.onClick} className={`landing-button`}>
            Try Now
        </button>
    );
}


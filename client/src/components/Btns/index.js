import React from "react";
import "./style.css";

function Btn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn" />
    );

}

export default Btn;
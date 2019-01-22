import React from "react";

function Row(props){
    return(

        <div className={`row${props.fuild ? "-fluid" : ""}`}>
            {props.children}
        </div>
    );
}

export default Row;
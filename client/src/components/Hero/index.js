import React from "react";
import "./style.css";

function Hero(props){
    return(
        <div className="hero" {...props}>
            <h1>Google Books Search</h1>
            <h5>Search and save your favorite literature</h5>
            {props.children}
        </div>

    );
}

export default Hero;
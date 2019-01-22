import React from "react";
import Btn from "../Btns/index";
import "./style.css";



function Card(props) {
    return (
        <div className="card" {...props}>
            <div className="card-header">
                Featured
        </div>
            <div className="card-body">
            <img 
            className="card-img-top"
            data-value={props.id}
            key={props.id}
            src={props.img}
            alt="book"
            />
            
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Btn className="btn-success" />
                <Btn className="btn-danger" />
            </div>
        </div>


    );


}
export default Card;


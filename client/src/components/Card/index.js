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
            
                <h5 className="card-title"><a href={props.link}>{props.title}</a></h5>
                <p>{props.authors}</p>
                <p className="card-text">{props.desc}</p>
                <Btn className="btn-success" onClick={props.onClickView}>View</Btn>
                <Btn className="btn-danger" onClick={props.onClickEffect}>${
                    props.isSaved ? "Delete" : "Save"

                }</Btn>
            </div>
        </div>


    );


}
export default Card;


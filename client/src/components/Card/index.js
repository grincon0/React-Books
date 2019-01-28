import React from "react";
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

                <button className="btn-danger" onClick={props.onClick}>
                    {props.issaved ? "Delete" : "Save"}
                </button>
            </div>
        </div>


    );


}
export default Card;


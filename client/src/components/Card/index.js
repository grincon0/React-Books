import React, { Component } from "react";
import Flex from "../Flex/index";
import "./style.css";



export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transition: false
        }
    }
    componentDidUpdate = () => {
        
        
    }
    handleClickEvent = (event) => {
        
        this.setState({transition: true});
        setTimeout(() => {
            console.log('updated');
            this.props.onClick(event);
        }, 3000)

    }
    render = () => {
        return (
            <div id={`${this.props.id}`} className={`new-card anim ${this.state.transition ? "rollback" : ""}`} {...this.props}>
                <div className="card-body">
                    <img
                        className="card-img-top"
                        data-value={this.props.id}
                        key={this.props.id}
                        src={this.props.img}
                        alt="book"
                        height={290}
                        width={350}
                    />

                    <h5 className="card-title"><a href={this.props.link}>{this.props.title}</a></h5>
                    <p className="card-authors">{this.props.authors}</p>
                    <p className="card-text">{this.props.desc}</p>

                    <button className="btn-danger" onClick={(e) => this.props.onClick(e)}>
                        {this.props.issaved ? "Delete" : "Save"}
                    </button>
                </div>
            </div>
        );

    }
} 







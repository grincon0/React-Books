import React from "react";
import Btns from "../Btns/index";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <div className="form-group">
                <label htmlFor="bookSearch">Book Search</label>
                <input 
                name="search"
                value={props.search}
                onChange={props.handleInputChange}
                type="email"
                className="form-control"
                id="bookSearch"
                aria-describedby="emailHelp"
                placeholder="Search for a book!"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                
                <Btns
                onClick={props.handleFormSubmit}
                
                >Search</Btns>
            
            </div>

        </div>
    );

}

export default SearchForm;
import React from "react";
import Btns from "../Btns/index";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <div className="form-group  search-row sanim">
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
                <small id="emailHelp" className="form-text text-muted">Type the name of the book you're looking for here!</small>
                
                <Btns
                onClick={props.handleFormSubmit}
                
                >Search</Btns>
            
            </div>

        </div>
    );

}

export default SearchForm;
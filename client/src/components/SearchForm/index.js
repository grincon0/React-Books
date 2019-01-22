import React from "react";
import Btns from "../Btns/index";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <div class="form-group">
                <label for="bookSearch">Book Search</label>
                <input 
                value={props.search}
                onChange={props.handleInputChange}
                type="email"
                class="form-control"
                id="bookSearch"
                aria-describedby="emailHelp"
                placeholder="Search for a book!"
                />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                <Btns>Search</Btns>
            </div>

        </div>
    );

}

export default SearchForm;
import React from "react";
import Flex from "../Flex/index";
import {Button} from "../Landing/index";
import "./style.css";

function SearchForm(props) {

    return (
        <div>
            <Flex classes={`flex-col-center form-group form-fade-in ${props.animate ? "move-up" : "pre-move-position"}`}>
                <label htmlFor="bookSearch">Book Search</label>
                <input
                    name="search"
                    value={props.search}
                    onChange={props.handleInputChange}
                    type="email"
                    className="form-control"
                    id="bookSearch"
                    aria-describedby="searchHelp"
                    placeholder="Search for a book!"
                />
                <small id="searchHelp" className="form-text">Type the name of the book you're looking for here!</small>

                <Button
                    onClick={props.handleFormSubmit}
                    value={`Search`}

                >Search</Button>

            </Flex>



        </div>
    );

}

export default SearchForm;
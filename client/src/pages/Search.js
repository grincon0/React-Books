import React, { Component } from "react";
import Card from "../components/Card";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        
    }
    loadDefaultBooks() {
        API.getDefaultGoogleBooks()
            .then(res => {
                this.setState({ results: res.data.items });
            })
            .catch(err => console.log(err));

    }
    handleInputChange = event => {
        this.setState({ search: event.target.search });
    }
    handleFormSubmit = event => {
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                this.setState({ results: res.data.items })
            }).catch(err => console.log(err));
    }
    render() {

        let books = this.state.search.map( book => <Card img={book.imageLinks.thumbnail}  data-value={book.id} onClickView onClickSave/>)
        return (
            <div>
                <Container>
                    <Hero />
                    <Row>
                        <Col>
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}

                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {books}
                        </Col>
                    </Row>

                </Container>

            </div>


        );

    }

}


export default Search;



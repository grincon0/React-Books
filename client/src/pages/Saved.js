import React, { Component } from "react";
import Card from "../components/Card";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";


class Saved extends Component {
    state = {
        saved: []
    }
    loadSavedBooks() {
        let books = API.getAllSavedBooks();
        this.setState({ saved: books });

    }
    handleClickDelete(id,event){
        event.preventDefault();
        API.deleteBook(id).then( res => this.loadSavedBooks());
        

    }

    render() {

        let savedBooks = this.state.saved.map(book => <Card

            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors.map(author => `${author ? author : ""}`)}
            desc={book.description}
            img={book.imageLinks.thumbnail}
            link={book.volumeInfo.previewLink}
            
            key={book.id}
            onClick={() => this.handleClickDelete(
                book.id
            )} />);

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            {savedBooks}
                        </Col>
                    </Row>

                </Container>
            </div>

        );
    }

}

export default Saved;
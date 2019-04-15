import React, { Component } from "react";
import Card from "../components/Card";
import Col from "../components/Col";
import Container from "../components/Container";
import Flex from "../components/Flex/index";
import Row from "../components/Row";

import API from "../utils/API";

import "./styles/Saved.css";


class Saved extends Component {
    state = {
        saved: []
    }
    componentDidMount() {
        this.loadSavedBooks();


    }
    loadSavedBooks() {
        API.getAllSavedBooks().then((res) =>
            this.setState({ saved: res.data })
        );


    }
    handleClickDelete(event, data) {

        event.stopPropagation();

        console.log(data);
        API.deleteBook(data.id).then(() => this.loadSavedBooks());

    }

    render() {

        const items = this.state.saved.length >= 1 ?
            this.state.saved.map(book => <Card
                title={book.title}
                authors={book.authors}
                img={book.image}
                link={book.link}
                issaved={book.saved}
                key={book.book_id}
                id={book.book_id}
                onClick={(event) => this.handleClickDelete(event, {
                    id: book.book_id
                })} />)
            : null

        return (
            <Flex classes={`flex-col-center height-adjust`}>
                <div className={`saved-header`}>
                    <h1>Saved books</h1>
                </div>
                

                <Flex classes={`flex-row-items height-adjust`}>
                    {items}
                </Flex>
            </Flex>
        );
    }

}

export default Saved;
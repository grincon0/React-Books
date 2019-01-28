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
    componentDidMount(){
            this.loadSavedBooks();

        
    }
    loadSavedBooks() {
        API.getAllSavedBooks().then((res) =>
         this.setState({ saved: res.data })
         );
        

    }
    handleClickDelete(event, data){

        event.stopPropagation();

        console.log(data);
        API.deleteBook(data.id).then(() => this.loadSavedBooks());

    }

    render() {

        return (
            <div>
                <Hero />
                <Container>
                    <Row>
                        <Col size="md-12">
                        {this.state.saved.length >= 1 ?
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
                }
                    
                )} />)
        :
            console.log(this.state.saved)}
                        </Col> 
                    </Row>

                </Container>
            </div>

        );
    }

}

export default Saved;
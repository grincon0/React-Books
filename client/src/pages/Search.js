import React, { Component } from "react";
import Card from "../components/Card";
import Col from "../components/Col";
import Container from "../components/Container";
import Flex from "../components/Flex/index";
import Row from "../components/Row";

import SearchForm from "../components/SearchForm/index";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        saved: [],

    }
    componentDidMount() {
        /* this.getSavedBooksFromDB().then(this.loadDefaultBooks()); */

    /*     setTimeout(() => {

            console.log(this.state.results);
            console.log(this.state.saved)
        }, 1500); */

    }
    loadDefaultBooks() {
        API.getDefaultGoogleBooks()
            .then(res => {
                let newState = { ...this.state };


                newState.results = (res.data.items);


                this.setState(newState);
                console.log(this.state.results);
            })
            .catch(err => console.log(err));

    }
    handleInputChange = event => {
        const { name, value } = event.target;


        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                this.setState({ results: res.data.items })
            }).catch(err => console.log(err));
    }
    handleClickSave = (event, body) => {

        event.stopPropagation();




        if (!this.checkIfSaved(body.book_id)) {

            API.saveBook(body).then(res => {

                let newState = { ...this.state };
                newState.results = [];
                newState.saved.push(res.data);

                this.setState({ newState });
            });
        } else {
            console.log("This a dulicated. cannot save");
        }

        console.log(this.state.saved);
    }
    checkIfSaved(arr) {
        for (let i = 0; i < this.state.saved.length; i++) {

            if (arr.id === this.state.saved[i].book_id) {
                return true;
            }
        }

        return false;

    }
    getSavedBooksFromDB() {
        return new Promise((resolve, reject) => {
            API.getAllSavedBooks().then(
                (res) => {

                    let newState = { ...this.state }
                    console.log('incoming saved data', res.data);
                    newState.saved = (res.data);
                    this.setState(newState);
                }
            )
        });
    }
    render() {
        let books = this.state.results.map(book =>


            (this.checkIfSaved(book)) ?

                console.log("Duplicate found") :

                <Card
                    id={`card-${book.id}`}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    desc={book.volumeInfo.subtitle}
                    img={book.volumeInfo.imageLinks ?
                        book.volumeInfo.imageLinks.thumbnail ?
                            book.volumeInfo.imageLinks.thumbnail
                            : "https://hazlitt.net/sites/default/files/default-book.png"
                        : "https://hazlitt.net/sites/default/files/default-book.png"}
                    link={book.volumeInfo.previewLink}

                    key={book.id}
                    onClick={(event) => this.handleClickSave(event, ({
                        book_id: book.id,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors,
                        desc: book.volumeInfo.subtitle,
                        image: book.volumeInfo.imageLinks ?
                            book.volumeInfo.imageLinks.thumbnail ?
                                book.volumeInfo.imageLinks.thumbnail
                                : "https://hazlitt.net/sites/default/files/default-book.png"
                            : "https://hazlitt.net/sites/default/files/default-book.png",
                        link: book.volumeInfo.previewLink,
                        saved: true
                    }))}


                />


        )

        return (
            <section className={`no-overflow`} id="Search">
                <Flex classes={`flex-col-center  ${this.state.transition ? "fade" : ""} `}>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        search={this.state.search}
                    />
                    <div>
                        {books}
                    </div>
                </Flex>
            </section>
        );
    }
}


export default Search;



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
        elements: [],
        saved: [],
        animation: {
            canFormMove: false,
            canBooksAppear: false
        }

    }
    componentDidMount() {
        this.getSavedBooksFromDB();

    }
    componentDidUpdate = () => {
     /*   if (this.state.animation.canFormMove && this.state.canBooksAppear === false) {
            let newState = { ...this.state };
            newState.animation.canBooksAppear = true;
            this.setState(newState);
            console.log(this.state);
        }  */
       /*  console.log("state updated");
        if(this.state.animation.canFormMove){
            this.addAnimationEndLisenter(".form-group", "transition", "first");
        } */
        
    }
    addAnimationEndLisenter = (query, type, which) => {
        let element = document.querySelector(query);

        element.addEventListener(`${type}end`, () => {

            let newState = { ...this.state };

            switch (which) {
                case 'first':
                    newState.animation.canBooksAppear = true;
                    this.setState(newState);
                    break;
                default:

                    break;
            }
        });
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
            }).then(() => {
                this.clearStateElements();
                this.getSavedBooksFromDB();
                this.handleSearchFormMovement();
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
    handleSearchFormMovement = () => {
        if (this.state.animation.canFormMove === false) {
            this.setState({ animation: { canFormMove: true } });
        } else {
            return;
        }

    }

    checkIfSaved(arr) {
        for (let i = 0; i < this.state.saved.length; i++) {
            if (arr.id === this.state.saved[i].book_id) {
                return true;
            }
        }
        return false;
    }
    clearStateElements = () => {
        if(this.state.elements.length !== 0){
            let newState = {...this.state}
            newState.elements = [];
            this.setState(newState);
        }else{
            return;
        }
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
    elementizeAndDump = () =>{
        this.elementizeBooks();
        this.dumpBooks();
        
    }
    elementizeBooks = () => {
        console.log('running elemetizintion again');
        if(this.state.results.length !== 0){
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
            );
            
            /* let newState = {...this.state};
            newState.elements = books;
            this.setState(newState); */
            return books;
        }
       
    }
    dumpBooks = () => {
      if (this.state.animation.canFormMove) {

            console.log(this.state.elements);
            let books = [...this.state.elements];

            return books;
        }else{
            return;
        } 

    }
    render() {
        let books = this.elementizeBooks();

    

        return (
            <section className={``} id="Search">
                <Flex classes={`flex-col-center  ${this.state.transition ? "fade" : ""} `}>
                    <SearchForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        search={this.state.search}
                        animate={this.state.animation.canFormMove}
                    />
                    <Flex classes={`flex-row-items padding-fix`}>
                        {books ? books : ""}
                    </Flex>
                </Flex>
            </section>
        );
    }
}


export default Search;



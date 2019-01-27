import React, { Component } from "react";
import Card from "../components/Card";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm/index";
import API from "../utils/API";

class Search extends Component {
    state = {
        search: "",
        results: [],
        saved:[],
        
    }
    componentDidMount(){

        if(this.state.saved.length < 1){
            this.loadDefaultBooks();
        }else{
            console.log('saved books exist');
        }
        
    }
    loadDefaultBooks() {
        API.getDefaultGoogleBooks()
            .then(res => {
                this.setState({ results: res.data.items });
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

        if(!this.state.saved.includes(body.book_id)){

            API.saveBook(body).then(res => {

                let newState = {...this.state};
                newState.saved.push(res);
        
                this.setState({newState});
              });
        }
    }
    checkIfSaved(obj){
        for(let i = 0; i< this.state.results.length; i++){
            if(obj[i] === this.state.results[i].id){
                return true;
            }
        }

        return false;

    }
    render() {
    
        let books = this.state.results.map( book => 
        

        <Card 
            title={book.volumeInfo.title} 
            authors={book.volumeInfo.authors} 
            desc={book.description}
            img={book.volumeInfo.imageLinks ?
                book.volumeInfo.imageLinks.thumbnail ?
                book.volumeInfo.imageLinks.thumbnail
                        : "https://hazlitt.net/sites/default/files/default-book.png"
                : "https://hazlitt.net/sites/default/files/default-book.png"} 
            link={book.volumeInfo.previewLink}  
            
            key={book.id} 
            onClick={(event) => this.handleClickSave( event, ({
                book_id: book.id,
                title: book.volumeInfo.title,
                authors : book.volumeInfo.authors,
                desc : book.description,
                img: book.volumeInfo.imageLinks ?
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
            <div>
                <Container>
                    <Hero />
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                search={this.state.search}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {books}
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}


export default Search;



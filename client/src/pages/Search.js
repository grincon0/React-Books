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
        this.loadDefaultBooks();
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
    handleClickSave(body){
     API.saveBook(body).then(res => {
          console.log(body);
      }).catch(err => console.log(err));

        
    }
    render() {
    

        let books = this.state.results.map( book => <Card 
            
            title={book.volumeInfo.title} 
            authors={book.volumeInfo.authors.map(author => `${author ? author : ""}`)} 
            desc={book.description}
            img={book.volumeInfo.imageLinks.thumbnail} 
            link={book.volumeInfo.previewLink}  
            
            key={book.id} 
            onClick={()=> this.handleClickSave({
                book_id: book.id,
                title: book.volumeInfo.title,
                authors : book.volumeInfo.author,
                desc : book.description,
                img: book.volumeInfo.imageLinks.thumbnail,
                link: book.volumeInfo.previewLink,
                saved: true
            })}/>)
        return (
            <div>
                <Container>
                    <Hero />
                    <Row>
                        <Col size="md-12">
                            <SearchForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
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



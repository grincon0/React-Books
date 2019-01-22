import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "../src/components/Navbar";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";
import Footer from "../src/components/Footer";
import Wrapper from  "../src/components/Wrapper";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <NavBar />
      <Wrapper>
        <Router exact path="/" component={Search}/>
        <Router exact path="/search" component={Search}/>
        <Router exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

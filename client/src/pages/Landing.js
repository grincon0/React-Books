import React, {Component} from "react";
import Flex from "../components/Flex/index";
import { Button } from "../components/Landing/index";

export default class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            transition : false
        }
    }
    handleClickEvent = () => {

        //run transition anims by changing state
        //wait then change location href
        this.setState({transition : true});

        setTimeout(()=> {
            window.location = "/search";
        },600)
    }
    render = () => {
        return(
            <section className={`no-overflow`} id="Landing">
                <Flex classes={`flex-col-center full-height ${this.state.transition ? "fade" : ""} `}>
                    <h1 className={`landing-header`}>Search and save your favorite books</h1>
                    <Button id="landing-btn" onClick={this.handleClickEvent} value={`Try Now`} />
                </Flex>
            </section>
        );
    }
}

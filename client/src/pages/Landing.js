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

    }
    render = () => {
        return(
            <section className={`no-overflow`} id="Landing">
                <Flex classes={`flex-col-center full-height `}>
                    <h1 className={`landing-header`}>Search and save your favorite books</h1>
                    <Button />
                </Flex>
            </section>
        );
    }
}

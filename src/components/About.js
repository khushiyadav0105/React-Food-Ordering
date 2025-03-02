//this is a function component
import React from "react";
import User from "./User";
import UserClass from "./Userclass";


class About extends React.Component{
    constructor(props){
        super(props);


    }

    componentDidMount(){

    }
    render(){
        return(
            <div>
                <h1>this is about</h1>
                <h2>khushi yadav</h2>
                <UserClass/>
            </div>
        )
    }
}

export default About;
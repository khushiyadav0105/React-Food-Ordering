import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // You can add any necessary side effects here
    }

    render() {
        return (
            <div>
                <div> Logged-in User: 
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <span>{loggedInUser}</span>}
                    </UserContext.Consumer>
                </div>
                <h1>This is About</h1>
                <h2>Khushi Yadav</h2>
                <UserClass />
            </div>
        );
    }
}

export default About;

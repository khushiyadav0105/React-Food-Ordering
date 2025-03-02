//this is a function component
import User from "./User";
import UserClass from "./Userclass";
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>this is the about page</h2>
            <User/>
            <UserClass/>
        </div>
    );
};

export default About;
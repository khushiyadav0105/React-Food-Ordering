import React from "react";  

class UserClass extends React.Component { 
  constructor(props){
    super(props);

    this.state={
      userInfo:{
        name:"dummy",
        location: "default",
        avatar_url:"",
      },
    };
    
  };

  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/khushiyadav0105")

    const json=await data.json();
    this.setState({
      userInfo:json,

    })
    console.log(json);

  }
  render() {

    const{name,location,avatar_url}=this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="Profile" style={{ width: "100px", borderRadius: "50%" }} />

        <h2>Hello from Class Component</h2>
        <h2>name:{name}</h2>
        <h2>location:{location}</h2>
      </div>
    );
  }
}

export default UserClass;

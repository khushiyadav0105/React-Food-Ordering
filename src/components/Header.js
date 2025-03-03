import { LOGO_URL } from "../utils/constants";
import { CART_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {


  const [btnNameReact,setbtnNameReact]= useState("Login");

  const onlineStatus=useOnlineStatus();


    return (
      <div className="flex justify-between" >
        <div className="logo-container">
          <img
            className="w-36"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-5 m-5">
          
            <li className="px-2">online status: {onlineStatus? "✅":"🔴"}</li>
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2">
              <Link to="/about">About Us</Link></li>
            <li className="px-2">
              <Link to="/contact">Contact Us</Link>
              </li>
            <li className="px-2">Cart</li>
            <li className="px-2"><Link to="/grocery">Grocery</Link></li>
            <button className="login" onClick={()=>{
              btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
              }}

              >{btnNameReact}
                </button>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header;
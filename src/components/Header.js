import { LOGO_URL } from "../utils/constants";
import { CART_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Logo from "../Assets/image.png";
 
const Header = () => {


  const [btnNameReact,setbtnNameReact]= useState("Login");

  const onlineStatus=useOnlineStatus();


    return (
      <div className="flex justify-between items-center bg-[#FF8C00]  shadow-md py-2 px-6" >
        <div className="logo-container">
        <img className="w-20 md:w-28 rounded-full shadow-lg" src={Logo} alt="Logo"/>

        </div>
        <div className="flex items-center">
          <ul className="flex space-x-6 text-black font-semibold">
          
            <li className="flex items-center">
              <span className="text-gray-700">Online Status:</span> 
            <span className="ml-2">{onlineStatus ? "✅" : "🔴"}</span>
            </li>
            <li className="hover:text-[#D32F2F] transition">
              <Link to="/">Home</Link></li>
            <li className="hover:text-[#D32F2F] transition">
              <Link to="/about">About Us</Link></li>
            <li className="hover:text-[#D32F2F] transition">
              <Link to="/contact">Contact Us</Link>
              </li>
            
            <li className="hover:text-[#D32F2F] transition"><Link to="/grocery">Grocery</Link></li>
            <li className="relative">
            <Link to="/cart">
              🛒 
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1"></span>
            </Link>
          </li>
            <button className="bg-[#5c6714] hover:bg-[#FFB300] text-black px-4 py-2 rounded-lg font-bold" onClick = { () => {
              btnNameReact==="Login" ? setbtnNameReact("Logout") : setbtnNameReact ("Login");
              }}

              >{btnNameReact}
                </button>
            
          </ul>
        </div>
      </div>
    );
  };

export default Header;
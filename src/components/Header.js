import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Home, Info, Phone, ShoppingCart, LogIn, LogOut, ShoppingBag } from "lucide-react";
import UserContext from "../utils/UserContext";
import Logo from "../Assets/image.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    // bg-[#fff7f0]
    <div className="flex justify-between items-center bg-[#0e1c44] text-white py-4 px-10 shadow-lg shadow-gray-100/50 sticky top-0 z-50">
      {/* Logo */}
      <div className="ml-24">
        <img className="w-20 md:w-24" src={Logo} alt="Logo" />
      </div>

      {/* Navigation */}
      <ul className="flex items-center space-x-8 font-semibold text-sm md:text-base">
        <li className="flex items-center gap-1 hover:text-orange-700 hover:scale-105 transform transition-transform duration-200">
          <Home className="h-5 w-5" />
          <Link to="/">Home</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-orange-700 hover:scale-105 transform transition-transform duration-200">
          <Info className="h-5 w-5" />
          <Link to="/about">About</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-orange-700 hover:scale-105 transform transition-transform duration-200">
          <Phone className="h-5 w-5" />
          <Link to="/contact">Contact</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-orange-700 hover:scale-105 transform transition-transform duration-200">
          <ShoppingBag className="h-5 w-5" />
          <Link to="/grocery">Grocery</Link>
        </li>

        <li className="flex items-center gap-1 hover:text-orange-700 hover:scale-105 transform transition-transform duration-200 relative">
          <ShoppingCart className="h-5 w-5" />
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </li>

        {/* Login / Logout */}
        <button
          className="flex items-center gap-1 border border-[#001858] text-[#001858] bg-white px-4 py-1.5 rounded-full hover:text-lg transition-all duration-300"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact === "Login" ? <LogIn className="h-4 w-4" /> : <LogOut className="h-4 w-4" />}
          {btnNameReact}
        </button>
      </ul>
    </div>
  );
};

export default Header;
